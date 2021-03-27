import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProviderComponent } from './components/icon-provider/icon-provider.component';
import { TenantOfficeComponent } from './components/tenant-office/tenant-office.component';

@NgModule({
  declarations: [
    IconProviderComponent,
    TenantOfficeComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    IconProviderComponent,
    TenantOfficeComponent
  ]
})
export class SharedModule { }
