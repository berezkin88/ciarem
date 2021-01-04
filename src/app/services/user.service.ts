
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // deprecated
  constructor(private db: AngularFireDatabase) { }

  getUser(username: string, password: string): Observable<any[]>{
     return this.db.list('/users/', qn =>
     qn.orderByChild('password').equalTo(password).limitToFirst(1)).valueChanges();
  }
}
