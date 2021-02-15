import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class Credentials {
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

class User {
  constructor(public id: string, public role: string) { }
}

const credentials = [
  new Credentials('tenant', 'tenant', 'MTAxOkJlc3QgU29sdXRpb24='),
  new Credentials('secretary', 'secretary', 'OTk5OnNlY3JldGFyeQ=='),
  new Credentials('manager', 'manager', 'MDAwOm1hbmFnZXI=')
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): boolean {
    const user = credentials.find(
      (x) => x.username === username && x.password === password
    );

    if (!user) {
      return false;
    }

    localStorage.setItem('token', user.token);
    return true;
  }

  logout(): boolean {
    localStorage.removeItem('token');
    return true;
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    }

    return true;
  }

  isPrincipal(): boolean {
    const role = this.getUser().role;

    if (role === 'secretary' || this.isManager()) {
      return true;
    }

    return false;
  }

  isManager(): boolean {
    const role = this.getUser().role;

    if (role === 'manager' || role === 'admin') {
      return true;
    }

    return false;
  }

  getUser(): User {
    const token = localStorage.getItem('token');
    const decoded = atob(token);
    const split = decoded.split(':');

    if (!split || split.length !== 2) {
      return undefined;
    }

    return new User(split[0], split[1]);
  }
}
