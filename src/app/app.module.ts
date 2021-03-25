import { CommonModule } from '@angular/common';
import { environment } from './../environments/environment';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BillsActsComponent } from './bills-acts/bills-acts.component';
import { BillsScheduleComponent } from './bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { IssuesComponent } from './issues/issues.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients/clients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconProviderComponent } from './icon-provider/icon-provider.component';
import { TenantOfficeComponent } from './tenant-office/tenant-office.component';
import { UaMonthPipe } from './ua-month.pipe';
import { ActReconciliationComponent } from './act-reconciliation/act-reconciliation.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    BillsActsComponent,
    BillsScheduleComponent,
    AgreementsComponent,
    IssuesComponent,
    ProfileComponent,
    ClientsComponent,
    IconProviderComponent,
    TenantOfficeComponent,
    UaMonthPipe,
    ActReconciliationComponent,
    NewIssueComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule,
    NgApexchartsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
