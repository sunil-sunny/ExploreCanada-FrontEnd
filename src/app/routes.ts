import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { PackagedetailsComponent } from './packages/packagedetails/packagedetails.component';
import { PackagesComponent } from './packages/packages.component';
import { AuthGuard } from './auth/auth.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OtpComponent } from './otp/otp.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';


export const appRoutes: Routes =[
  { path : 'booking' , component : BookingComponent, canActivate: [AuthGuard]},
  { path : 'login' , component : LoginComponent},
  { path : 'register' , component : RegisterComponent},
  { path : 'home', component : PackagesComponent},
  { path : 'userdetails', component: UserdetailsComponent, canActivate: [AuthGuard]},
  { path : 'otp', component: OtpComponent, canActivate: [AuthGuard]},
  { path : 'bookingdetails', component: BookingdetailsComponent, canActivate: [AuthGuard]}
];
