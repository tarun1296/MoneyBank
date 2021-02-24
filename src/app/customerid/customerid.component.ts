import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerid',
  templateUrl: './customerid.component.html',
  styleUrls: ['./customerid.component.css'],
})
export class CustomeridComponent implements OnInit {
  userId: string;
  constructor() {}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('key');
  }
}
