import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

import { product_schema } from 'src/models/product_model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product_list: product_schema[];
  load() {
    this._productsService.GetAllProducts().subscribe((res) => {
      this.product_list = res;
      console.log(this.product_list);
    });
  }

  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.load();
  }
}
