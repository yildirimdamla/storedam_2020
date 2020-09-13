import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { new_user_schema } from 'src/models/new_user_model';
import { WebuserService } from 'src/services/webuser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  kisiform = new FormGroup({
    userFullName: new FormControl(''),
    userNickname: new FormControl(''),
    userMail: new FormControl(''),
    accountSecret: new FormControl(''),
    accountID: new FormControl(''),

    phone: new FormControl(''),
    address: new FormControl(''),
    favorites: new FormControl(''),
    ordersID: new FormControl(''),
  });

  constructor(private _webuserService: WebuserService) {}
  onSubmit(newUser: new_user_schema) {
    // console.log(newUser);
    this._webuserService.AddWebuser(newUser).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
