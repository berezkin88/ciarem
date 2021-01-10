import { Observable } from 'rxjs';
import { Doc } from '../models/doc';
import { BillsService } from './../services/bills.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass'],
})
export class BillsActsComponent implements OnInit {
  delete = faTimes;
  @ViewChild('scrollTable') scrollTable: ElementRef;

  doc$: Observable<Doc[]>;

  constructor(private billsService: BillsService) {}

  ngOnInit(): void {
    this.doc$ = this.billsService.getAll();
  }

  scrollUp(): void {
    this.scrollTable.nativeElement
  }
}
