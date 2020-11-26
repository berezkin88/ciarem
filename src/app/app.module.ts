import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BillsActsComponent } from './bills-acts/bills-acts.component';
import { BillsScheduleComponent } from './bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    BillsActsComponent,
    BillsScheduleComponent,
    AgreementsComponent,
    SubmissionsComponent,
    ProfileComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
