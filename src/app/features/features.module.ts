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
import { UaMonthPipe } from './ua-month.pipe';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: IssuesComponent, canActivate: [AuthGuardService] },
  { path: 'bills-acts', component: BillsActsComponent, canActivate: [AuthGuardService] },
  { path: 'agreements', component: AgreementsComponent, canActivate: [AuthGuardService] },
  { path: 'bills-schedule', component: BillsScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'issues', component: IssuesComponent, canActivate: [AuthGuardService] }
];

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
    RouterModule.forChild(routes)
  ]
})
export class FeaturesModule { }
