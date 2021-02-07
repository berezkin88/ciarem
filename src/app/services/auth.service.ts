import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): boolean {
    const user = users.find(
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

  isSecretary(): boolean {
    const token = localStorage.getItem('token');

    if (token === users[1].token || token === users[2].token) {
      return true;
    }

    return false;
  }

  isManager(): boolean {
    const token = localStorage.getItem('token');

    if (token === users[2].token) {
      return true;
    }

    return false;
  }
}
