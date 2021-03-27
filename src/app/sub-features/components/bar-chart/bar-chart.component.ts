import { ChartData } from '../../../shared/models/chartData';
import { Input, ViewChild, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;
  @Input('data') data: ChartData;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Послуги',
          data: this.data.services
        },
        {
          name: 'Оренда',
          data: this.data.rents
        }
      ],
      chart: {
        height: 600,
        type: 'bar',
        background: '#fff',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: this.data.categories
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#000']
        }
      }
    };
  }
}
