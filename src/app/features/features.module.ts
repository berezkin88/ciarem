import { CommonModule } from '@angular/common';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { BillsActsComponent } from './components/bills-acts/bills-acts.component';
import { BillsScheduleComponent } from './components/bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { IssuesComponent } from './components/issues/issues.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BillsActsComponent,
    BillsScheduleComponent,
    AgreementsComponent,
    IssuesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule
  ]
})
export class AppModule { }
