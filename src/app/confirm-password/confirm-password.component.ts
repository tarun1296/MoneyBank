import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css'],
})
export class ConfirmPasswordComponent implements OnInit {
  error: string;
  constructor(private router: Router, private bankService: BankService) {}

  ngOnInit(): void {}

  updatePwd(form) {
    console.log(form.password)
    console.log(form.value);
    this.bankService.updatePwd(form.customerMobileNo,form.password,form.new_password).subscribe((response) => {
      console.log(response);
      if (response.error) {
        alert("Some Thing went wrong Please check Password")
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else {
        alert(response.value)
        
        if(response.value === "Some Thing went wrong PLease check password"){
          this.router.navigateByUrl('/updatePassword');
        }else{
        this.router.navigateByUrl('/login');
        }
      }
    });
  }
}
