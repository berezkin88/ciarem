import { Observable } from 'rxjs';
import { AgreementsService } from '../../../shared/services/agreements.service';
import { Component, OnInit } from '@angular/core';
import { SnapshotAction } from '@angular/fire/database';

@Component({
  selector: 'agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.sass']
})
export class AgreementsComponent implements OnInit {
  agreement$: Observable<SnapshotAction<any>[]>;

  constructor(private agreementsService: AgreementsService) { }

  ngOnInit(): void {
    this.agreement$ = this.agreementsService.getAll();
  }

}
