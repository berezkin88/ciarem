import { AuthService } from '../../../shared/services/auth.service';
import { Doc } from '../../../shared/models/doc';
import { Tenant } from '../../../shared/models/tenant';
import { TenantsService } from '../../../shared/services/tenants.service';
import { Observable, Subscription } from 'rxjs';
import { DocsService } from '../../../shared/services/docs.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SnapshotAction } from '@angular/fire/database';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BillsActsComponent implements OnInit, OnDestroy {
  delete = faTimes;
  @ViewChild('scrollTable') scrollTable: ElementRef;

  docs: Doc[] = [] as Doc[];
  filteredDocs: Doc[] = [] as Doc[];
  tenant$: Observable<SnapshotAction<Tenant>[]>;
  subscription$: Subscription;

  maxYear: number;
  minYear: number;

  constructor(
    private docsService: DocsService,
    private tenantsService: TenantsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initDocs();
    this.tenant$ = this.tenantsService.getAllTenants();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  private initDocs(): void {
    let userId: string;

    if (!this.authService.isPrincipal()) {
      userId = this.authService.getUser().id;
    }

    this.subscription$ = this.docsService
      .getAllDocs(userId)
      .subscribe((results) => {
        results.forEach((doc) => {
          this.docs.push(doc);
          this.filteredDocs.push(doc);
        });
        this.setYears();
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

  filter(value?: string): void {
    this.filteredDocs = value
      ? this.docs.filter((doc) => doc.client === value)
      : this.docs;
    this.setYears();
  }

  private setYears(): void {
    this.minYear = this.filteredDocs
      .map((d) => new Date(d.date).getFullYear())
      .reduce((a, b) => Math.min(a, b));
    this.maxYear = this.filteredDocs
      .map((d) => new Date(d.date).getFullYear())
      .reduce((a, b) => Math.max(a, b));
  }

  remove(doc: Doc): void {
    const index = this.filteredDocs.indexOf(doc);
    this.filteredDocs.splice(index, 1);
  }

  newBill(): void {
    alert('Not Implemented yet');
  }

  newAct(): void {
    alert('Not Implemented yet');
  }

  editDoc(doc: Doc): void {
    console.log(doc);
    alert('Not Implemented yet');
  }
}
