import { Observable } from 'rxjs';
import { Bill } from './../models/bill';
import { BillsService } from './../services/bills.service';
import { Component, OnInit } from '@angular/core';
import {
  faCaretUp,
  faClipboardCheck,
  faHourglassHalf,
  faExclamationTriangle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass'],
})
export class BillsActsComponent implements OnInit {
  up = faCaretUp;
  complete = faClipboardCheck;
  pending = faHourglassHalf;
  failed = faExclamationTriangle;
  delete = faTimes;

  bills: Observable<Bill[]>;

  constructor(private billsService: BillsService) {}

  ngOnInit(): void {
    this.bills = this.billsService.getAll();
  }
}
