import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  faUserCircle,
  faClipboardList,
  faCalendarDay,
  faFileInvoiceDollar,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent {
  profile = faUserCircle;
  documents = faClipboardList;
  calendar = faCalendarDay;
  invoices = faFileInvoiceDollar;
  questions = faQuestionCircle;

  constructor(private router: Router) {}

  getRoute(): string {
    return this.router.url;
  }
}
