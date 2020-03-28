import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../register/userdetails.model';
import { UserDetailsService } from './userdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {


  public userDetails: UserDetails;
  constructor(private userDetailsService: UserDetailsService, private route: Router) { }

  ngOnInit(): void {
    this.userDetailsService.getUserDetails().subscribe(data => this.userDetails = data);
  }

  onSubmit(){

    this.route.navigate(['/bookingdetails']);

  }
}
