import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients/clients.component';
import { BillsScheduleComponent } from './bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { AuthGuardService } from './auth-guard.service';
import { BillsActsComponent } from './bills-acts/bills-acts.component';
import { LoginComponent } from './login/login.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SubmissionsComponent, canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'bills-acts', component: BillsActsComponent, canActivate:[AuthGuardService] },
  { path: 'agreements', component: AgreementsComponent, canActivate:[AuthGuardService] },
  { path: 'bills-schedule', component: BillsScheduleComponent, canActivate:[AuthGuardService] },
  { path: 'clients', component: ClientsComponent, canActivate:[AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService] },
  { path: 'submissions', component: SubmissionsComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
