import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  constructor(private bankService: BankService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(form: NgForm){
    this.bankService.login(form.value).subscribe(response => {
      console.log(response);
      if (response.error){
        alert(response.message);
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else{
          alert('User Loggedin Sucess');//remove this after
          this.router.navigateByUrl('/home');
      }
    });
  }
}
