import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from './register/userdetails.model';
import { concat } from 'rxjs';


@Injectable()
export class RegisterService {

  registerUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient){}

  resgisterUser(user: UserDetails){

    console.log("user id is:"+user.userId);
    console.log("name is:"+user.firstName);


    const body: UserDetails = {


      userId : user.userId,
      firstName : user.firstName,
      lastName : user.lastName,
      dateOfBirth : user.dateOfBirth,
      address : user.address,
      country : user.country,
      pinCode : user.pinCode,
      password : user.password,
      securityAnswer : user.securityAnswer,
      mobileNumber : user.mobileNumber
      };


      var reqheaders = new HttpHeaders({'Content-Type': 'application/json'});

      return this.http.post(this.registerUrl , body,{ headers : reqheaders});

  }

}
