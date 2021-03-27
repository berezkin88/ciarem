import { NewIssueComponent } from '../sub-features/components/new-issue/new-issue.component';
import { ActReconciliationComponent } from '../sub-features/components/act-reconciliation/act-reconciliation.component';
import { ProfileComponent } from '../features/components/profile/profile.component';
import { BillsScheduleComponent } from '../features/components/bills-schedule/bills-schedule.component';
import { AgreementsComponent } from '../features/components/agreements/agreements.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { BillsActsComponent } from '../features/components/bills-acts/bills-acts.component';
import { LoginComponent } from './components/login/login.component';
import { IssuesComponent } from '../features/components/issues/issues.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
