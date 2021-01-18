import { Doc } from '../models/doc';
import { Tenant } from '../models/tenant';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private db: AngularFireDatabase) { }

  getAllDocs(client?: Tenant): Observable<Doc[]> {
    return this.db.list<Doc>('/docs/').valueChanges();
  }
}
