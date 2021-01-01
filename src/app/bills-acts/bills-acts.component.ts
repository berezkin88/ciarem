import { Component } from '@angular/core';
import {
  faCaretUp,
  faClipboardCheck,
  faHourglassHalf,
  faExclamationTriangle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bills-acts',
  templateUrl: './bills-acts.component.html',
  styleUrls: ['./bills-acts.component.sass'],
})
export class BillsActsComponent {
  up = faCaretUp;
  complete = faClipboardCheck;
  pending = faHourglassHalf;
  failed = faExclamationTriangle;
  delete = faTimes;

  constructor() {}
}
