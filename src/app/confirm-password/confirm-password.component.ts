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

  updatePwd(form: NgForm) {
    this.bankService.login(form.value).subscribe((response) => {
      console.log(response);
      if (response.error) {
        alert(response.message);
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
