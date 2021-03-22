import { ChartDataService } from './../services/chart-data.service';
import { ChartData } from './../models/chartData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-schedule',
  templateUrl: './bills-schedule.component.html',
  styleUrls: ['./bills-schedule.component.sass']
})
export class BillsScheduleComponent implements OnInit {
  chartData: ChartData;

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit(): void {
    this.chartData = this.chartDataService.getChartData();
  }

}
