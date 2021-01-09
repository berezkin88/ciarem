import { Observable } from 'rxjs';
import { Doc } from '../models/doc';
import { BillsService } from './../services/bills.service';
import { Component, OnInit } from '@angular/core';
import {
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
  complete = faClipboardCheck;
  pending = faHourglassHalf;
  failed = faExclamationTriangle;
  delete = faTimes;

  doc$: Observable<Doc[]>;

  constructor(private billsService: BillsService) {}

  ngOnInit(): void {
    this.doc$ = this.billsService.getAll();
  }
}
