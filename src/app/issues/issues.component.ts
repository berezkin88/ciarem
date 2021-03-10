import { IssuesService } from './../services/issues.service';
import { Issue } from './../models/issue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.sass'],
})
export class IssuesComponent implements OnInit {
  issues = [] as Issue[];

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.issuesService.getAllIssues().subscribe((issues) =>
      issues.forEach((issue) => {
        const is = issue.payload.val();
        is.id = (issue.key as unknown) as number | 0;
        this.issues.push(is);
      })
    );
  }
}
