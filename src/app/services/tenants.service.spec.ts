import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { EMPTY, of } from 'rxjs';

import { TenantsService } from './tenants.service';

describe('TenantsService', () => {
  let service: TenantsService;
  let mockDB: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockDB = jasmine.createSpyObj('AngularFireDatabase', ['list', 'object']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: mockDB }],
    });
    service = TestBed.inject(TenantsService);
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
    const actualValue = service.getAllTenants();

    expect(actualValue).toBeTruthy();
  });

  it('should return tenant', () => {
    const mockFireObject = jasmine.createSpyObj('AngularFireObject', [
      'valueChanges',
    ]);

    mockDB.object.and.returnValue(mockFireObject);
    mockFireObject.valueChanges.and.returnValue(
      of({
        ceo: '',
        ceoPhoneNum: '',
        code: 0,
        email: '',
        name: 'foo',
        phoneNum: '',
        representative: '',
        snapshotStateRepo: '',
      })
    );

    service.getTenantById('101').subscribe((v) => expect(v.name).toBe('foo'));
  });

  it('should be manager', () => {
    service
      .getTenantById('000')
      .subscribe((o) => expect(o.name).toEqual('manager'));
  });

  it('should be secretary', () => {
    service
      .getTenantById('999')
      .subscribe((o) => expect(o.name).toEqual('secretary'));
  });
});
