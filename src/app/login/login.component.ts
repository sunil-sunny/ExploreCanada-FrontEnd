import { Component, OnInit, Output } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 @Output() isLogged = new EventEmitter<boolean>();
 loginStatus: boolean;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router,private app:AppComponent ) { }

  ngOnInit(): void {

    if(localStorage.getItem('token')=== 'logout'){
      this.loginStatus=false;
    }


  }

  onSubmit( userName, password) {
    this.loginService.doLogin(userName, password).subscribe((data: any) => {

      console.log(data.token);
      localStorage.setItem('token', data.token);
      this.isLogged.emit(true);
      this.loginStatus = true;
      this.app.loginStatus=true;
      this.router.navigate(['/otp']);

    }, ( error: HttpErrorResponse) => {
      this.isLogged.emit(false);
      this.app.loginStatus=false;
      this.router.navigate(['/login']);
    });
  }

}
