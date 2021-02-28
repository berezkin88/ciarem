import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.sass']
})
export class NewIssueComponent implements OnInit {
  issueNumber: string;

  constructor() {
    this.issueNumber = this.getRandom();
   }

  ngOnInit(): void {
  }

  private getRandom(): string {
    return  Math.floor(Math.random() * Math.floor(999)) as unknown as string;
  }

  submit(value: any): void {
    console.log('This is a fake function');
    console.log(value);
  }
}
