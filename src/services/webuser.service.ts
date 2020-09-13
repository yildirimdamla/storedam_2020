import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { new_user_schema } from 'src/models/new_user_model';

@Injectable({
  providedIn: 'root',
})
export class WebuserService {
  constructor(private _http: HttpClient) {}
  AddWebuser(newUser: new_user_schema) {
    return this._http.post(environment.apiurl + '/account/add', newUser);
  }
}
