import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeridComponent } from './customerid.component';

describe('CustomeridComponent', () => {
  let component: CustomeridComponent;
  let fixture: ComponentFixture<CustomeridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
