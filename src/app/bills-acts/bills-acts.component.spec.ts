import { EMPTY } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { TenantsService } from './../services/tenants.service';
import { DocsService } from './../services/docs.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsActsComponent } from './bills-acts.component';

describe('BillsActsComponent', () => {
  let component: BillsActsComponent;
  let fixture: ComponentFixture<BillsActsComponent>;
  let mockDocsService: jasmine.SpyObj<DocsService>;
  let mockTenantsService: jasmine.SpyObj<TenantsService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockDocsService = jasmine.createSpyObj('DocsService', ['getAllDocs']);
    mockTenantsService = jasmine.createSpyObj('TenantsService', ['getAllTenants']);
    mockAuthService = jasmine.createSpyObj('AuthService', ['isPrincipal', 'isManager']);

    mockDocsService.getAllDocs.withArgs(undefined).and.returnValue(EMPTY);
    mockTenantsService.getAllTenants.and.returnValue(EMPTY);
    mockAuthService.isPrincipal.and.returnValue(true);
    mockAuthService.isManager.and.stub();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsActsComponent ],
      providers: [
        { provide: DocsService, useValue: mockDocsService },
        { provide: TenantsService, useValue: mockTenantsService },
        { provide: AuthService, useValue: mockAuthService },
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
    expect(mockDocsService.getAllDocs).toHaveBeenCalled();
    expect(mockTenantsService.getAllTenants).toHaveBeenCalled();
    expect(mockAuthService.isPrincipal).toHaveBeenCalled();
  });
});

