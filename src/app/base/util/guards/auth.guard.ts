import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      this.router.navigate(['index/auth/login']);
      return false;
    } else return true;
  }
}
