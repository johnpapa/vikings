import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authHeader = 'Basic your-token-goes-here';
    const authReq = req.clone({
      setHeaders: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
      }
    });

    console.log(`HTTP: Adding headers`);
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
