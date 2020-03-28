import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDetails } from '../userdetails/bookingdetails.model';


@Injectable()
export class BookingDetailsService {

  bookingUrl = "http://localhost:8080/api/bookingdetails";
  constructor(private http: HttpClient ) {

  }

  getBookingDetails(): Observable<BookingDetails> {

    const headerData = {
      'Access-Control-Allow-Origin': '*',
      'security': 'Basic ' + localStorage.getItem('token')

    };
    const reqHeaders = new HttpHeaders(headerData);
    return this.http.get<BookingDetails>(this.bookingUrl, {headers : reqHeaders});


  }


}
