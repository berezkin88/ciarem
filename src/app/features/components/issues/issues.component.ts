import { Subscription } from 'rxjs';
import { IssuesService } from '../../../shared/services/issues.service';
import { Issue } from '../../../shared/models/issue';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.sass'],
})
export class IssuesComponent implements OnInit, OnDestroy {
  issues = [] as Issue[];
  subscription$: Subscription;

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.subscription$ = this.issuesService.getAllIssues().subscribe((issues) =>
      issues.forEach((issue) => {
        const is = issue.payload.val();
        is.id = (issue.key as unknown) as number | 0;
        this.issues.push(is);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
