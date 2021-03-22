import { Status } from './../models/status';
import { ChartData } from './../models/chartData';
import { DocsService } from './docs.service';
import { Injectable } from '@angular/core';

const services = [
  { month: '06', sum: 22000, status: Status.FAILED },
  { month: '07', sum: 20350, status: Status.COMPLETE },
  { month: '08', sum: 21457, status: Status.PENDING },
  { month: '09', sum: 22000, status: Status.UNKNOWN },
  { month: '10', sum: 22000, status: Status.UNKNOWN },
  { month: '11', sum: 22000, status: Status.UNKNOWN }
];

const rents = [
  { month: '06', sum: 105000, status: Status.COMPLETE },
  { month: '07', sum: 105000, status: Status.COMPLETE },
  { month: '08', sum: 105000, status: Status.PENDING },
  { month: '09', sum: 105000, status: Status.UNKNOWN },
  { month: '10', sum: 105000, status: Status.UNKNOWN },
  { month: '11', sum: 105000, status: Status.UNKNOWN }
];

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() { }

  getChartData(): ChartData {
    return new ChartData(services, rents);
  }
}
