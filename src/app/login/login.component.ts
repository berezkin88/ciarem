import { Component, OnInit } from '@angular/core';
import { faMale, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  male = faMale;
  user = faUser;
  lock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
