import { IssuesService } from './../services/issues.service';
import { Issue } from './../models/issue';
import { Component } from '@angular/core';
import { Status } from '../models/status';

@Component({
  selector: 'new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.sass']
})
export class NewIssueComponent {
  issueNumber: string;

  constructor(private issuesService: IssuesService) {
    this.issueNumber = this.getRandom();
   }

  private getRandom(): string {
    return  Math.floor(Math.random() * Math.floor(999)) as unknown as string;
  }

  submit(value: any): void {
    console.log('This is a fake function');
    console.log(value);
  }
}
