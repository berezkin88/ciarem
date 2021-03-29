import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ActReconciliationComponent } from './components/act-reconciliation/act-reconciliation.component';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';

const routes: Routes = [
  { path: 'act-reconciliation', component: ActReconciliationComponent, canActivate: [AuthGuardService] },
  { path: 'issues/new', component: NewIssueComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [
    ActReconciliationComponent,
    NewIssueComponent,
    BarChartComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    NgApexchartsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BarChartComponent
  ]
})
export class SubFeaturesModule { }
