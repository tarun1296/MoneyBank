import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-customeraddsuccess',
  templateUrl: './customeraddsuccess.component.html',
  styleUrls: ['./customeraddsuccess.component.css']
})
export class CustomeraddsuccessComponent implements OnInit {
  response: string;

  // constructor(private reg: RegisterComponent) { 

  // }
  constructor(){

  }



  ngOnInit(): void {
    this.response = localStorage.getItem("userdata");
    
  }

}
