import { Status } from './../models/status';
import { Component, Input, OnInit } from '@angular/core';
import {
  faClipboardCheck,
  faHourglassHalf,
  faExclamationTriangle,
  faQuestionCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'icon-provider',
  templateUrl: './icon-provider.component.html',
  styleUrls: ['./icon-provider.component.sass'],
})
export class IconProviderComponent implements OnInit {
  @Input('status') status: string;

  icon: IconDefinition;
  iconColor: string;

  constructor() {}

  ngOnInit(): void {
    switch (this.status) {
      case 'complete':
        this.icon = faClipboardCheck;
        this.iconColor = 'icon-green';
        break;
      case 'pending':
        this.icon = faHourglassHalf;
        this.iconColor = 'icon-grey';
        break;
      case 'failed':
        this.icon = faExclamationTriangle;
        this.iconColor = 'icon-red';
        break;
      default:
        this.icon = faQuestionCircle;
        this.iconColor = 'icon-red';
        console.log('Unknown status');
        break;
    }
  }
}
