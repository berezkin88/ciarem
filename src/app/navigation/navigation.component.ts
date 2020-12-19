import { Component, OnInit } from '@angular/core';
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
export class NavigationComponent implements OnInit {
  profile = faUserCircle;
  documents = faClipboardList;
  calendar = faCalendarDay;
  invoices = faFileInvoiceDollar;
  questions = faQuestionCircle;

  constructor() {}

  ngOnInit(): void {}
}
