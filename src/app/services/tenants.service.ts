import { Tenant } from './../models/tenant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {

  constructor(private db: AngularFireDatabase) { }

  getAllTenants(): Observable<SnapshotAction<Tenant>[]> {
    return this.db.list<Tenant>('/tenants/').snapshotChanges();
  }
}
