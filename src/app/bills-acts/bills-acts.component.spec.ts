import { EMPTY, NEVER, Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { TenantsService } from './../services/tenants.service';
import { DocsService } from './../services/docs.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsActsComponent } from './bills-acts.component';

describe('BillsActsComponent', () => {
  let component: BillsActsComponent;
  let fixture: ComponentFixture<BillsActsComponent>;
  let docsService: jasmine.SpyObj<DocsService>;

  beforeEach(async () => {
    docsService = jasmine.createSpyObj('DocsService', ['getAllDocs']);
    docsService.getAllDocs.withArgs(undefined).and.returnValue(EMPTY);

    await TestBed.configureTestingModule({
      declarations: [ BillsActsComponent ],
      providers: [
        { provide: DocsService, useValue: docsService },
        { provide: TenantsService, useClass: MockTenantService },
        { provide: AuthService, useClass: MockAuthService },
        BillsActsComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should call services', () => {
    docsService.getAllDocs.withArgs(undefined).and.returnValue(EMPTY);
    component.ngOnInit();
    expect(docsService.getAllDocs).toHaveBeenCalled();
  });
});

class MockDocsService {
  getAllDocs(): Observable<any> {
    return EMPTY;
  }
}

class MockTenantService {
  getAllTenants(): Observable<any> {
    return EMPTY;
  }
}

class MockAuthService {
  isPrincipal(): boolean {
    return true;
  }

  isManager(): boolean {
    return true;
  }
}
