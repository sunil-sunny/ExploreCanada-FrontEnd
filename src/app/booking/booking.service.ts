import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { BookingDetails } from '../userdetails/bookingdetails.model';



@Injectable()
export class BookingService {

  private bookingUrl = 'http://localhost:8080/book';


  constructor(private http: HttpClient, private router: Router){

  }

  bookTicket( fromDetails: string, toDetails: string, journeyDate: string ): Observable<BookingDetails>{
    console.log(fromDetails+'  '+toDetails+'  '+journeyDate);
    const bookingdata = {
      'fromDetails': fromDetails,
      'toDetails': toDetails,
      'journeyDate': journeyDate
      };
    const headerData = {
        'Access-Control-Allow-Origin': '*',
        'security': 'Basic ' + localStorage.getItem('token')

      };
    console.log(headerData.security);
    const reqheaders = new HttpHeaders(headerData);
    console.log('going to book');
    return this.http.post<BookingDetails>(this.bookingUrl, bookingdata, {headers: reqheaders});

  }


}
