import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {

  constructor(private db: AngularFireDatabase) { }

  getAllTenants(): Observable<any[]> {
    return this.db.list('/tenants/').valueChanges();
  }
}
