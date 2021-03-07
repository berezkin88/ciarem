import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { EMPTY } from 'rxjs';
import { Issue } from '../models/issue';

import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  let service: IssuesService;
  let mockDB: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockDB = jasmine.createSpyObj('AngularFireDatabase', ['list', 'object']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireDatabase, useValue: mockDB }
      ]
    });
    service = TestBed.inject(IssuesService);
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
    const actualValue = service.getAllIssues();

    expect(mockDB.list).toHaveBeenCalled();
    expect(actualValue).toBeTruthy();
  });


  it('should call push', () => {
    const mockFirebaseObject = jasmine.createSpyObj('AngularFireObject', [
      'update',
    ]);

    mockDB.object.and.returnValue(mockFirebaseObject);
    mockFirebaseObject.update.and.stub();
    service.saveIssue({} as Issue);

    expect(mockDB.object).toHaveBeenCalled();
    expect(mockFirebaseObject.update).toHaveBeenCalled();
  });
});
