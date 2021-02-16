import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';

import { DocsService } from './docs.service';

describe('DocsService', () => {
  let service: DocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireDatabase, useClass: MockAngularFireDatabase },
        DocsService
      ]
    });
    service = TestBed.inject(DocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class MockAngularFireDatabase {}
