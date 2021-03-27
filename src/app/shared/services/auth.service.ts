import { Injectable } from '@angular/core';

class Credentials {
  constructor(
    public username: string,
    public password: string,
    public token: string
  ) {}
}

class User {
  constructor(public id: string, public role: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credentials = [
    new Credentials('tenant', 'tenant', 'MTAxOkJlc3QgU29sdXRpb25z'),
    new Credentials('secretary', 'secretary', 'OTk5OnNlY3JldGFyeQ=='),
    new Credentials('manager', 'manager', 'MDAwOm1hbmFnZXI='),
  ];

  login(username: string, password: string): boolean {
    const result = this.credentials.find(
      (x) => x.username === username && x.password === password
    );

    if (!result) {
      return false;
    }

    localStorage.setItem('token', result.token);
    return true;
  }

  logout(): boolean {
    localStorage.removeItem('token');
    return true;
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
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
