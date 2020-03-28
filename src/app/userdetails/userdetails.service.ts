import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../register/userdetails.model';


@Injectable()
export class UserDetailsService {

  userDetailsUrl = 'http://localhost:8080/api/userdetails';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<UserDetails> {

    const headerData = {
      'Access-Control-Allow-Origin': '*',
      'security': 'Basic ' + localStorage.getItem('token')

    };
    const reqHeaders = new HttpHeaders(headerData);
    return this.http.get<UserDetails>(this.userDetailsUrl, {headers : reqHeaders});
  }


}
