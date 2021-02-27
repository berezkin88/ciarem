import { Component } from '@angular/core';

@Component({
  selector: 'act-reconciliation',
  templateUrl: './act-reconciliation.component.html',
  styleUrls: ['./act-reconciliation.component.sass']
})
export class ActReconciliationComponent {
  dateFrom: string;
  dateTo: string;

  constructor() {
    this.dateFrom = new Date().toISOString().split('T')[0];
    this.dateTo = new Date().toISOString().split('T')[0];
   }

   submitRequest(): void {
     console.log('Fake function');
     console.log(this.dateFrom);
     console.log(this.dateTo);
   }
}
