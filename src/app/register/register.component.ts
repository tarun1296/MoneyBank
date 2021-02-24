import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  message;
  error;
  constructor(private router: Router,private bankService: BankService) { }

  ngOnInit(): void {
  }
  registerUser(form: NgForm){
    this.bankService.register(form.value).subscribe(response => {
      console.log(response);
      if (response.error){
        this.error = response.message;
        alert('Failed to Register');
        setTimeout( () => {
         this.error = null;
        }, 5000);
      }else{
        alert('Registered Successfully');
        sessionStorage.setItem("key", JSON.stringify(response));
        this.router.navigateByUrl('/customerid');
        setTimeout( () => {
          this.message = null;
         }, 3000);
      }
      form.reset();
    });
  }
}
