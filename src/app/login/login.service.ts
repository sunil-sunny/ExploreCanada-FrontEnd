import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from 'querystring';



@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:8080/authenticate';
  private otpValidate = 'http://localhost:8080/verify/otp';


  constructor(private http: HttpClient, private router: Router){

  }

  doLogin( userName: string, thepassword: string ) {
    const userdata = {
      username : userName,
      password : thepassword
      };
    const reqheaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.loginUrl, userdata, {headers: reqheaders});

  }

  validateOtp(otpValue: number) {
    const headerData = {
      'security': 'Basic ' + localStorage.getItem('token'),
      'otp': otpValue.toString()

    };
    const otpheaders = new HttpHeaders(headerData);
    return this.http.post(this.otpValidate, null, {headers: otpheaders});

  }

}
