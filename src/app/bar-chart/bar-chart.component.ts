import { Status } from './../models/status';
import { Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

const fakeData = [
  { status: Status.COMPLETE},
  { status: Status.FAILED},
  { status: Status.PENDING},
  { status: Status.UNKNOWN},
  { status: Status.UNKNOWN},
  { status: Status.UNKNOWN}
];

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass'],
})
export class BarChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;
  @Input('data') data = fakeData;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Послуги',
          data: [
            { x: '01', y: 22000, fillColor: this.provideColor(this.data[0].status)},
            { x: '02', y: 22000, fillColor: this.provideColor(this.data[1].status)},
            { x: '03', y: 22000, fillColor: this.provideColor(this.data[2].status)},
            { x: '04', y: 22000, fillColor: this.provideColor(this.data[3].status)},
            { x: '05', y: 22000, fillColor: this.provideColor(this.data[4].status)},
            { x: '06', y: 22000, fillColor: this.provideColor(this.data[5].status)},
          ]
        },
        {
          name: 'Оренда',
          data: [
            { x: '01', y: 100000, fillColor: this.provideColor(this.data[0].status)},
            { x: '02', y: 100000, fillColor: this.provideColor(this.data[1].status)},
            { x: '03', y: 100000, fillColor: this.provideColor(this.data[2].status)},
            { x: '04', y: 100000, fillColor: this.provideColor(this.data[3].status)},
            { x: '05', y: 100000, fillColor: this.provideColor(this.data[4].status)},
            { x: '06', y: 100000, fillColor: this.provideColor(this.data[5].status)},
          ]
        }
      ],
      chart: {
        height: 600,
        type: 'bar',
        background: '#fff',
        toolbar: {
          show: false,
          tools: {
            selection: false
          }
        },
        selection: {
          enabled: false
        }
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06'],
        tooltip: {
          enabled: false
        }
      },
      legend: {
        show: false
      }
    };
  }

  private provideColor(status: Status): string {
    if (status === Status.COMPLETE) {
      return '#19967d';
    } else if (status === Status.FAILED) {
      return '#c92d39';
    } else if (status === Status.PENDING) {
      return '#ffdf71';
    } else if (status === Status.UNKNOWN){
      return '#e5e5e5';
    }
  }
}
