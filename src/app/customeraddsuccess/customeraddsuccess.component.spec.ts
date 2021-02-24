import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddsuccessComponent } from './customeraddsuccess.component';

describe('CustomeraddsuccessComponent', () => {
  let component: CustomeraddsuccessComponent;
  let fixture: ComponentFixture<CustomeraddsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeraddsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeraddsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
