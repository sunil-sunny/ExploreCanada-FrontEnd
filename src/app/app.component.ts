import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExploreCanada';
  loginStatus: boolean;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

    var token=localStorage.getItem('token').toString();
    console.log(token);
    console.log("compare result");
    console.log(token != null);

    if ( token === 'logout') {

      console.log("null success");

      this.loginStatus = false;

    } else {
      this.loginStatus = true;
    }
    console.log(this.loginStatus);

  }


  doLogout(){
    console.log('logging out');
    this.loginStatus=false;
    localStorage.setItem('token', 'logout');
  }
}
