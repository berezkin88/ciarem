import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { AgreementsComponent } from '../features/components/agreements/agreements.component';
import { BillsActsComponent } from '../features/components/bills-acts/bills-acts.component';
import { BillsScheduleComponent } from '../features/components/bills-schedule/bills-schedule.component';
import { IssuesComponent } from '../features/components/issues/issues.component';
import { ProfileComponent } from '../features/components/profile/profile.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { ActReconciliationComponent } from '../sub-features/components/act-reconciliation/act-reconciliation.component';
import { NewIssueComponent } from '../sub-features/components/new-issue/new-issue.component';

const routes: Routes = [
  { path: '', component: IssuesComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'bills-acts', component: BillsActsComponent, canActivate: [AuthGuardService] },
  { path: 'act-reconciliation', component: ActReconciliationComponent, canActivate: [AuthGuardService] },
  { path: 'agreements', component: AgreementsComponent, canActivate: [AuthGuardService] },
  { path: 'bills-schedule', component: BillsScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'issues', component: IssuesComponent, canActivate: [AuthGuardService] },
  { path: 'issues/new', component: NewIssueComponent, canActivate: [AuthGuardService] }
];
@NgModule({
  declarations: [
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    NavigationComponent,
    RouterModule
  ]
})
export class CoreModule { }
