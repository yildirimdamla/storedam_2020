import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

import {
  product_schema,
  Category,
  FilteringOperations,
} from 'src/models/product_model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product_list: product_schema[];
  categoryObject: Category[] = [];
  public defaultFilterSelections = 'all';

  isFilterRowInisable: boolean = false;
  showProductList(filter) {
    FilteringOperations.filterbyCategory(filter);
  }

  load() {
    this._productsService.GetAllProducts().subscribe((res) => {
      this.product_list = res;

      // Adding Category
      var thisCategoryAdded = false;
      for (var i = 0; i < this.product_list.length; i++) {
        var newC = new Category();
        newC.category = this.product_list[i].category;
        newC.label = this.product_list[i].categoryDescription;

        for (let index = 0; index < this.categoryObject.length; index++) {
          if (this.categoryObject[index].category == newC.category) {
            thisCategoryAdded = true;
          } else {
            thisCategoryAdded = false;
          }
        }
        if (thisCategoryAdded == false) {
          this.categoryObject.push(newC);
          thisCategoryAdded = true;
        } else {
          thisCategoryAdded = true;
        }
      }
      // End of Adding Category

      FilteringOperations.filterbyCategory(this.defaultFilterSelections);
    });
  }

  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.load();
  }
}
