import { AuthService } from '../../../shared/services/auth.service';
import { Tenant } from '../../../shared/models/tenant';
import { TenantsService } from '../../../shared/services/tenants.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  tenant: Tenant;

  subscription$: Subscription;

  constructor(
    private tenantsService: TenantsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.authService.getUser().id;

    this.subscription$ = this.tenantsService.getTenantById(id).subscribe((t) => (this.tenant = t));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
