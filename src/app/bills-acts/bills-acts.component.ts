import { AuthService } from './../services/auth.service';
import { Doc } from './../models/doc';
import { Tenant } from './../models/tenant';
import { TenantsService } from '../services/tenants.service';
import { Observable } from 'rxjs';
import { DocsService } from '../services/docs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SnapshotAction } from '@angular/fire/database';
import { StatusUtil } from '../utilities/status-util';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass'],
})
export class BillsActsComponent implements OnInit {
  delete = faTimes;
  @ViewChild('scrollTable') scrollTable: ElementRef;

  docs: Doc[] = [] as Doc[];
  filteredDocs: Doc[] = [] as Doc[];
  tenant$: Observable<SnapshotAction<Tenant>[]>;

  constructor(
    private docsService: DocsService,
    private tenantsService: TenantsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initDocs();
    this.tenant$ = this.tenantsService.getAllTenants();
  }

  private initDocs(): void {
    let userId: string;

    if (!this.authService.isPrincipal()) {
      userId = this.authService.getUser().id;
    }

    this.docsService.getAllDocs(userId).subscribe((results) => {
      results.forEach((doc) => {
        const d = doc;
        d.status = StatusUtil.valueOf(doc.status.toString());
        this.docs.push(d);
        this.filteredDocs.push(d);
      });
    });
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
      behavior: 'smooth',
    });
  }

  filter(value?: string): any {
    this.filteredDocs = value
      ? this.docs.filter((doc) => doc.client === value)
      : this.docs;
  }
}
