
import { fakeBackendProvider } from './fake-back/fake-backend';
import { environment } from './../environments/environment';
import { UserService } from './services/user.service';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
