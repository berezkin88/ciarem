import { AuthService } from './../services/auth.service';
import { Tenant } from './../models/tenant';
import { TenantsService } from './../services/tenants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  tenant: Tenant;

  constructor(
    private tenantsService: TenantsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.authService.getUser().id;

    this.tenantsService.getTenantById(id).subscribe((t) => (this.tenant = t));
  }
}
