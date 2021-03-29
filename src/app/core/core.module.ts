import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent}
    ])
  ],
  exports: [
    NavigationComponent,
    RouterModule
  ]
})
export class CoreModule { }
