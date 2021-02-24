import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BankService {


  constructor(private http: HttpClient) {
  }

  myURL = 'http://localhost:9092/customer/';

  register(user) {
    return this.http.post<any>(`${this.myURL}addUser`, user);
  }
  

  login(user){
    return this.http.get<any>(`${this.myURL}login/`+user.customerMobileNo+`/`+user.password);
  }
  updatePwd(form){
    return this.http.post<any>(`${this.myURL}updatePWD`, form);
    
  }
  
}