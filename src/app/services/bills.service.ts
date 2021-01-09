import { Doc } from '../models/doc';
import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private db: AngularFireDatabase) { }

  getAll(client?: Client): Observable<Doc[]> {
    return this.db.list<Doc>('/docs/').valueChanges();
  }
}
