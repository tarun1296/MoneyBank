import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { CustomeraddsuccessComponent } from './customeraddsuccess/customeraddsuccess.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'updatePassword', component: ConfirmPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addsuccess', component: CustomeraddsuccessComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
