import { NewIssueComponent } from './new-issue/new-issue.component';
import { ActReconciliationComponent } from './act-reconciliation/act-reconciliation.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients/clients.component';
import { BillsScheduleComponent } from './bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BillsActsComponent } from './bills-acts/bills-acts.component';
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IssuesComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'bills-acts', component: BillsActsComponent, canActivate: [AuthGuardService] },
  { path: 'act-reconciliation', component: ActReconciliationComponent, canActivate: [AuthGuardService] },
  { path: 'agreements', component: AgreementsComponent, canActivate: [AuthGuardService] },
  { path: 'bills-schedule', component: BillsScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'issues', component: IssuesComponent, canActivate: [AuthGuardService] },
  { path: 'issues/new', component: NewIssueComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
