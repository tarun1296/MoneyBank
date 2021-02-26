import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { conformation } from './Models/conformation';


@Injectable({
  providedIn: 'root'
})

export class BankService {
  res: conformation;

  constructor(private http: HttpClient) {
  }

  myURL = 'http://localhost:9092/customer/';

  register(user) {
    return this.http.post<any>(`${this.myURL}addUser`, user);
  }


  login(user) {
    return this.http.get<any>(`${this.myURL}login/` + user.customerMobileNo + `/` + user.password);
  }
  updatePwd(customerMobileNo, password, new_password) {
    this.res = new conformation(customerMobileNo, password, new_password);
    return this.http.post<any>(`${this.myURL}updatePwd/`, this.res);

  }

}