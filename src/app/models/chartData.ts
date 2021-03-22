import { Status } from './status';

interface DataPoint {
  xaxes: string;
  yaxis: number;
  fillColor: string;
}

interface InputData {
  month: string;
  sum: number;
  status: Status;
}

export class ChartData {
  services: DataPoint[];
  rents: DataPoint[];
  categories: string[];

  constructor(services: InputData[], rents: InputData[]) {
    this.services = this.convertToDataPoints(services);
    this.rents = this.convertToDataPoints(rents);
    this.categories = this.getCategories(services, rents);
  }

  private convertToDataPoints(inputs: InputData[]): DataPoint[] {
    const output = [] as DataPoint[];

    for (const input of inputs) {
      const dataPoint = {
        xaxes: input.month,
        yaxis: input.sum,
        fillColor: this.provideColor(input.status),
      };

      output.push(dataPoint);
    }

    return output;
  }

  private getCategories(services: InputData[], rents: InputData[]): string[] {
    const set = new Set<string>();

    this.populateSet(set, services);
    this.populateSet(set, rents);

    return Array.from(set.values());
  }

  private populateSet(set: Set<string>, array: InputData[]): void {
    for (const element of array) {
      set.add(element.month);
    }
  }

  private provideColor(status: Status): string {
    if (status === Status.COMPLETE) {
      return '#19967d';
    } else if (status === Status.FAILED) {
      return '#c92d39';
    } else if (status === Status.PENDING) {
      return '#ffdf71';
    } else if (status === Status.UNKNOWN) {
      return '#e5e5e5';
    }
  }
}
