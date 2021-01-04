import { Bill } from '../models/bill';
import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private db: AngularFireDatabase) { }

  getAll(client?: Client): Observable<Bill[]> {
    return this.db.list<Bill>('/bills/', qu => qu.equalTo(client + '')).valueChanges();
  }
}
