import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

import {
  product_schema,
  columnlist,
  tableoperations,
} from 'src/models/product_model';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  product_list: product_schema[];
  searchTetxtBinding: string;
  columnlist = columnlist;
  showThisForm = '';

  showForm(product) {
    this.showThisForm = product._id;
    var thisProductForm = document.getElementById(product._id);

    console.log(thisProductForm);
  }
  sortbycolumn(item) {
    tableoperations.sortbyString(item, this.product_list);
  }
  deleteProductButton(product) {
    this._productsService.DeleteProduct(product._id).subscribe((res) => {
      this.Load();
    });
  }

  Load() {
    this._productsService.GetAllProducts().subscribe((res) => {
      this.product_list = res;
      console.log(this.product_list);
    });
  }

  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.Load();
  }
}
