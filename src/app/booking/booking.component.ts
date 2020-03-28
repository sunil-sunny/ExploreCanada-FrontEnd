import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(fromPlace, toPlace , journeyDate) {

    console.log('booking onlclick working');
    this.bookingService.bookTicket(fromPlace, toPlace, journeyDate).subscribe(data => console.log(data));
    this.route.navigate(['/bookingdetails']);

  }

}
