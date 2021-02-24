import { TenantsService } from './../services/tenants.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
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

  loggedUser: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tenantService: TenantsService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    const id = user.id;

    if (id === '000' || id === '999') {
      this.loggedUser = user.role;
      return;
    }

    this.tenantService
      .getTenantById(id)
      .subscribe(t => this.loggedUser = t.name);
  }

  getRoute(): string {
    return this.router.url;
  }
}
