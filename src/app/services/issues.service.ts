import { Issue } from './../models/issue';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private db: AngularFireDatabase) { }

  getAllIssues(): Observable<SnapshotAction<Issue>[]> {
    return this.db.list<Issue>('/issues').snapshotChanges();
  }

  saveIssue(value: Issue): Promise<void> {
    return this.db.object<Issue>('/issues/' + value.id).update({
      date: value.date,
      initiator: value.initiator,
      status: value.status,
      topic: value.topic
    });
  }
}
