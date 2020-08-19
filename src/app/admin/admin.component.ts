import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

import {
  product_schema,
  columnlist,
  tableoperations,
} from 'src/models/product_model';
import { ResourceLoader } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  product_list: product_schema[];
  editedProduct = new product_schema();
  searchTetxtBinding: string;
  columnlist = columnlist;
  showThisForm = '';

  showForm(product) {
    if (this.showThisForm != product._id) {
      this.showThisForm = product._id;
      this.editedProduct = product;
    } else {
      this.showThisForm = '';
      this.editedProduct = new product_schema();
    }
  }
  sortbycolumn(item) {
    tableoperations.sortbyString(item, this.product_list);
  }
  deleteProductButton(product: product_schema) {
    this._productsService.DeleteProduct(product._id).subscribe((res) => {
      this.Load();
    });
  }
  edit(product: product_schema) {
    this._productsService.EditProduct(product).subscribe((res) => {
      console.log('tamamdır');
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
