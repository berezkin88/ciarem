import { IssuesService } from '../../../shared/services/issues.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from '../../../shared/models/issue';
import { Status } from '../../../shared/models/status';

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

  submit(form: NgForm): void {
    const issue = {} as Issue;
    const value = form.value;

    issue.status = Status.PENDING;
    issue.date = new Date();
    issue.initiator = 'user';
    issue.id = value.issueNumber;
    issue.topic = value.issueTopic;

    console.log(issue);

    this.issuesService.saveIssue(issue);
    console.log('Issue submitted');
  }
}
