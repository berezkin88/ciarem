import { Component } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tenant-office',
  templateUrl: './tenant-office.component.html',
  styleUrls: ['./tenant-office.component.sass']
})
export class TenantOfficeComponent {
  briefcase = faBriefcase;
}
