import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// doesn't work
class User {
  constructor(private username_: string, private password_: string, private token_: string) { }

  get username() {
    return this.username_;
  }

  get password() {
    return this.password_;
  }

  get token() {
    return this.token_;
  }
}

let users = [
  new User('tenant', 'tenant', 'fake-tenant-token'),
  new User('secretary', 'secretary', 'fake-secretary-token'),
  new User('manager', 'manager', 'fake-manager-token')
];

@Injectable()
export class FakeBackend implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    console.log('in fake-backend');

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      if (url.endsWith('/users/authenticate') && method === 'POST') {

        return authenticate();
      } else {
        return badRequest();
      }
    }

    function badRequest() {
      return throwError({
        status: 400,
        error: { message: 'No such authorization endpoint found' },
      });
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({ token: user.token });
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: string) {
      return throwError({ error: { message } });
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackend,
  multi: true,
};
