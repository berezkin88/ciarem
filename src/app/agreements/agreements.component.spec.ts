import { AgreementsService } from './../services/agreements.service';
import { EMPTY } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsComponent } from './agreements.component';

describe('AgreementsComponent', () => {
  let component: AgreementsComponent;
  let fixture: ComponentFixture<AgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementsComponent ],
      providers: [
        { provide: AgreementsService, useClass: MockAgreementsService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockAgreementsService {
  getAll(): any {
    return EMPTY;
  }
}
