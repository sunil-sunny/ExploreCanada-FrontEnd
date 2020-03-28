import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private loginService: LoginService,private route: Router) { }

  ngOnInit(): void {

  }

  onSubmit(otp: any) {

    if ( otp === 898569) {

      this.route.navigate(['/login']);

    } else{
      this.route.navigate(['/userdetails']);
    }
  }

}
