import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TransformResponseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          if (
            event.url &&
            event.url.indexOf('heroes') >= 0 &&
            Array.isArray(event.body)
          ) {
            let body = event.body.map(hero => {
              if (hero.name.match(/Aslaug/i)) {
                hero.name = 'Rey Skywalker';
              }
              return hero;
            });
            console.log(`HTTP: Request transformed`);
            return event.clone({ body });
          }
          return event.clone(); // undefined means dont change it
          // return event.clone(undefined); // undefined means dont change it
        }
      })
    );
  }
}
