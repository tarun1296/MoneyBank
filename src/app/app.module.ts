import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { HomeComponent } from './home/home.component';
import { NavhomeComponent } from './navhome/navhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomeraddsuccessComponent } from './customeraddsuccess/customeraddsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccountRegisterComponent,
    ConfirmPasswordComponent,
    HomeComponent,
    NavhomeComponent,
    CustomeraddsuccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
