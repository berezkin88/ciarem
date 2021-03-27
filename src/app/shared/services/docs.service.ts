import { Doc } from '../models/doc';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private db: AngularFireDatabase) { }

  getAllDocs(clientId?: string): Observable<Doc[]> {
    return this.db.list<Doc>('/docs/', q => !clientId ? q : q.orderByChild('client').equalTo(clientId)).valueChanges();
  }
}
