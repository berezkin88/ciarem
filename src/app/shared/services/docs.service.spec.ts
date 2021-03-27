
import { EMPTY } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';

import { DocsService } from './docs.service';

describe('DocsService', () => {
  let service: DocsService;
  let mockDB: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockDB = jasmine.createSpyObj('AngularFireDatabase', ['list']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireDatabase, useValue: mockDB }
      ]
    });
    service = TestBed.inject(DocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Observable', () => {
    const mockFirebaseList = jasmine.createSpyObj('AngularFireList', ['valueChanges']);

    mockDB.list.and.returnValue(mockFirebaseList);
    mockFirebaseList.valueChanges.and.returnValue(EMPTY);
    const actualValue = service.getAllDocs();

    expect(actualValue).toBeTruthy();
  });
});
