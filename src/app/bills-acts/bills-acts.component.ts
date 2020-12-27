import { Component } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass']
})
export class BillsActsComponent {
  up = faCaretUp;

  constructor() { }

}
