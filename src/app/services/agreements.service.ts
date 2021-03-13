import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgreementsService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<SnapshotAction<any>[]> {
    return this.db.list('/agreements/').snapshotChanges();
  }
}
