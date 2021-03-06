import { Tenant } from './../models/tenant';
import { Observable, of } from 'rxjs';
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

  getTenantById(id: string): Observable<Tenant> {
    if (id === '000') {
      return this.manager();
    }

    if (id === '999') {
      return this.secretary();
    }

    return this.db.object<Tenant>(`/tenants/${id}`).valueChanges();
  }

  private manager(): Observable<Tenant> {
    return of({
      ceo : 'manager',
      ceoPhoneNum : '+380000000000',
      code : 0,
      email : 'no@gmail.com',
      name : 'manager',
      phoneNum : '+3800000000009',
      representative : 'manager',
      snapshotStateRepo : 'empty'
    });
  }

  private secretary(): Observable<Tenant> {
    return of({
      ceo : 'secretary',
      ceoPhoneNum : '+380000000000',
      code : 0,
      email : 'no@gmail.com',
      name : 'secretary',
      phoneNum : '+3800000000009',
      representative : 'secretary',
      snapshotStateRepo : 'empty'
    });
  }
}
