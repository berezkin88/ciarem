import { CommonModule } from '@angular/common';
import { fakeBackendProvider } from './fake-back/fake-backend';
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
import { SubmissionsComponent } from './submissions/submissions.component';
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
    ClientsComponent,
    IconProviderComponent,
    TenantOfficeComponent,
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
    CommonModule
  ],
  providers: [
    UserService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
