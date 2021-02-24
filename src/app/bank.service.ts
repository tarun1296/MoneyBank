import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BankService {


  constructor(private http: HttpClient) {
  }

  myURL = 'http://localhost:8080/lmsspringrest/';

  register(user) {
    return this.http.post<any>(`${this.myURL}addUser`, user);
  }
  

  login(user){
    return this.http.post<any>(`${this.myURL}login`, user);
  }
  updatePwd(form){
    return this.http.post<any>(`${this.myURL}updatePWD`, form);
    
  }
  
}