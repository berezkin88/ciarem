import { Tenant } from './../models/tenant';
import { TenantsService } from '../services/tenants.service';
import { Observable } from 'rxjs';
import { Doc } from '../models/doc';
import { DocsService } from './../services/bills.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SnapshotAction } from '@angular/fire/database';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass'],
})
export class BillsActsComponent implements OnInit {
  delete = faTimes;
  @ViewChild('scrollTable') scrollTable: ElementRef;

  doc$: Observable<Doc[]>;
  tenant$: Observable<SnapshotAction<Tenant>[]>;

  constructor(
    private docsService: DocsService,
    private tenantsService: TenantsService) {}

  ngOnInit(): void {
    this.doc$ = this.docsService.getAllDocs();
    this.tenant$ = this.tenantsService.getAllTenants();
  }

  scrollUp(): void {
    this.scrolling(-60);
  }

  scrollDown(): void {
    this.scrolling(60);
  }

  private scrolling(pixels: number): void {
    const scrollTableElement = this.scrollTable.nativeElement;
    const currentPosition = scrollTableElement.scrollTop;
    scrollTableElement.scroll({
      top: currentPosition + pixels,
      left: 0,
      behavior: 'smooth'
    });
  }

  filter(value: number): any {
    console.log(value);
  }
}
