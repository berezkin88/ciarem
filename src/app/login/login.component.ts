import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMale, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  maleIcon = faMale;
  userIcon = faUser;
  lockIcon = faLock;
  user: { username: string; password: string };

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    const result = this.authService.login(username, password);

    if (!result) {
      return;
    }

    this.router.navigate(['/bills-acts']);
  }
}
