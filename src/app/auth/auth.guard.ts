import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      console.log(localStorage.getItem('token'));


      if (localStorage.getItem('token') === 'logout') {
        console.log('redirecting');
        this.router.navigate(['/login']);
        return false;
      } else {
        console.log('logged in user');
        return true;
      }







  }

}
