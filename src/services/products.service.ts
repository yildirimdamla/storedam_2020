import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { product_schema } from 'src/models/product_model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}
  GetAllProducts(): any {
    return this._http.get(environment.apiurl + '/product/list');
  }
  DeleteProduct(id: string) {
    return this._http.post(environment.apiurl + '/product/delete/' + id, '');
  }
  EditProduct(product: product_schema) {
    return this._http.post(
      environment.apiurl + '/product/update/' + product._id,
      product
    );
  }
}
