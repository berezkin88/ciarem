import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  briefcase = faBriefcase;

  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
