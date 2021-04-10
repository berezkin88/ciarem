import { IssuesComponent } from './../features/components/issues/issues.component';
import { AuthGuardService } from './../shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavigationComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '**', component: IssuesComponent, canActivate: [AuthGuardService] }
    ])
  ],
  exports: [
    NavigationComponent,
    RouterModule
  ]
})
export class CoreModule { }
