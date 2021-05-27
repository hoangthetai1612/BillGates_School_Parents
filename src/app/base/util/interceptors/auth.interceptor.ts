import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private allowed = ['/assets', '/api/token'];
  constructor(private router: Router) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    if (this.allowed.some((url) => req.url.includes(url))) {
      return next.handle(req);
    }

    const token = JSON.parse(localStorage.getItem('access_token'));
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token.access_token,
        },
      });
    }

    if (!token) {
      return next.handle(req);
    }

    return next.handle(req).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              localStorage.clear();
              this.router.navigateByUrl('/login');
            } else {
              console.log(err);
            }
            console.log(err);
          }
        }
      )
    );
  }
}
