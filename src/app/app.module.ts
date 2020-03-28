import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { PackagedetailsComponent } from './packages/packagedetails/packagedetails.component';
import { HttpClientModule } from '@angular/common/http';
import {PackageService} from './packages/packageservice';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './resgister.service';
import {RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { appRoutes } from './routes';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OtpComponent } from './otp/otp.component';
import { LoginService } from './login/login.service';
import { UserDetailsService } from './userdetails/userdetails.service';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BookingDetailsService } from './bookingdetails/bookingdetails.service';
import { BookingService } from './booking/booking.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    RegisterComponent,
    LoginComponent,
    BookingComponent,
    PackagedetailsComponent,
    UserdetailsComponent,
    OtpComponent,
    BookingdetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PackageService, RegisterService, LoginService, UserDetailsService, BookingDetailsService, BookingService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
