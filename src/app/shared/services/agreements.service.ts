import { Agreement } from '../models/agreement';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgreementsService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<SnapshotAction<Agreement>[]> {
    return this.db.list<Agreement>('/agreements/').snapshotChanges();
  }
}
