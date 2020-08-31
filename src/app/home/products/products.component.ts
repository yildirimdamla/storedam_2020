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
  public categoryObject: Category[] = [];
  public defaultFilterSelections = 'all';

  isFilterRowInisable: boolean = false;
  showProductList(filter) {
    FilteringOperations.filterbyCategory(filter);
  }

  load() {
    this._productsService.GetAllProducts().subscribe((res) => {
      this.product_list = res;

      FilteringOperations.addingCategory(
        this.product_list,
        this.categoryObject
      );

      FilteringOperations.filterbyCategory(this.defaultFilterSelections);
    });
  }

  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.load();
  }
}
