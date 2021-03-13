import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { EMPTY } from 'rxjs';

import { AgreementsService } from './agreements.service';

describe('AgreementsService', () => {
  let service: AgreementsService;
  let mockDB: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockDB = jasmine.createSpyObj('AngularFireDatabase', ['list']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: mockDB }],
    });
    service = TestBed.inject(AgreementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Observable', () => {
    const mockFirebaseList = jasmine.createSpyObj('AngularFireList', [
      'snapshotChanges',
    ]);

    mockDB.list.and.returnValue(mockFirebaseList);
    mockFirebaseList.snapshotChanges.and.returnValue(EMPTY);
    const actualValue = service.getAll();

    expect(actualValue).toBeTruthy();
  });
});
