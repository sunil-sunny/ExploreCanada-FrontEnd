import { Component, OnInit } from '@angular/core';
import { UserDetails } from './userdetails.model';
import { Form, NgForm } from '@angular/forms';
import { RegisterService } from '../resgister.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userdetails: UserDetails = new UserDetails();
  data: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {

    this.registerService.resgisterUser(form.value).subscribe(data => {this.data = 'success'; });

    if (this.data === 'success' ) {



    }

  }

}
