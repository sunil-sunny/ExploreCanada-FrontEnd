import { Component, OnInit } from '@angular/core';
import { BookingDetailsService } from './bookingdetails.service';
import { BookingDetails } from '../userdetails/bookingdetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  public bookingDetails: BookingDetails;

  constructor(private bookingDetailsService: BookingDetailsService,private route:Router) { }

  ngOnInit(): void {
    this.bookingDetailsService.getBookingDetails().subscribe(data => this.bookingDetails = data);
    console.log(this.bookingDetails.bookingID);
  }

  onSubmit(){

    this.route.navigate(['/booking']);
  }

}
