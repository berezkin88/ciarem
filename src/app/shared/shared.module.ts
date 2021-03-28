import { TenantsService } from './services/tenants.service';
import { IssuesService } from './services/issues.service';
import { DocsService } from './services/docs.service';
import { ChartDataService } from './services/chart-data.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AgreementsService } from './services/agreements.service';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CommonModule } from '@angular/common';
import { environment } from './../../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProviderComponent } from './components/icon-provider/icon-provider.component';
import { TenantOfficeComponent } from './components/tenant-office/tenant-office.component';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    IconProviderComponent,
    TenantOfficeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AgreementsService,
    AuthGuardService,
    AuthService,
    ChartDataService,
    DocsService,
    IssuesService,
    TenantsService
  ],
  exports: [
    IconProviderComponent,
    TenantOfficeComponent,
    AngularFireDatabaseModule,
    CommonModule
  ]
})
export class SharedModule { }
