import { SubFeaturesModule } from './../sub-features/sub-features.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { BillsActsComponent } from './components/bills-acts/bills-acts.component';
import { BillsScheduleComponent } from './components/bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { IssuesComponent } from './components/issues/issues.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UaMonthPipe } from '../ua-month.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BillsActsComponent,
    BillsScheduleComponent,
    AgreementsComponent,
    IssuesComponent,
    ProfileComponent,
    UaMonthPipe
  ],
  imports: [
    FontAwesomeModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    SharedModule,
    SubFeaturesModule,
    RouterModule.forChild([])
  ]
})
export class FeaturesModule { }
