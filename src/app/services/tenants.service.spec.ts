import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { EMPTY } from 'rxjs';

import { TenantsService } from './tenants.service';

describe('TenantsService', () => {
  let service: TenantsService;
  let mockDB: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockDB = jasmine.createSpyObj('AngularFireDatabase', ['list']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireDatabase, useValue: mockDB },
        TenantsService
      ]
    });
    service = TestBed.inject(TenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Observable', () => {
    const mockFirebaseList = jasmine.createSpyObj('AngularFireList', ['snapshotChanges']);

    mockDB.list.and.returnValue(mockFirebaseList);
    mockFirebaseList.snapshotChanges.and.returnValue(EMPTY);
    const actualValue = service.getAllTenants();

    expect(actualValue).toBeTruthy();
  });
});
