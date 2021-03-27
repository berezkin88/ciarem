import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ActReconciliationComponent } from './components/act-reconciliation/act-reconciliation.component';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    ActReconciliationComponent,
    NewIssueComponent,
    BarChartComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    NgApexchartsModule
  ],
  exports: [
    BarChartComponent
  ]
})
export class SubFeaturesModule { }
