import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { BillsActsComponent } from './features/components/bills-acts/bills-acts.component';
import { BillsScheduleComponent } from './features/components/bills-schedule/bills-schedule.component';
import { AgreementsComponent } from './features/components/agreements/agreements.component';
import { IssuesComponent } from './features/components/issues/issues.component';
import { ProfileComponent } from './features/components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UaMonthPipe } from './ua-month.pipe';
import { SubFeaturesModule } from './sub-features/sub-features.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    UaMonthPipe
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
    SubFeaturesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
