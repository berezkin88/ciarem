import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TenantsService } from '../services/tenants.service';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockTenantsService: jasmine.SpyObj<TenantsService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockTenantsService = jasmine.createSpyObj('TenantsService', ['getTenantById']);
    mockAuthService = jasmine.createSpyObj('AuthService', ['getUser']);

    mockAuthService.getUser.and.returnValue({ id: '000', role: 'manager'});
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: TenantsService, useValue: mockTenantsService },
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('laggedIn entity should be manager', () => {
    expect(component.loggedUser).toEqual('manager');
  });

  it('laggedIn entity should be test', () => {
    const spyObj = mockTenantsService.getTenantById.withArgs('101').and.returnValue(of({
      ceo : '',
      ceoPhoneNum : '',
      code : 0,
      email : '',
      name : 'test',
      phoneNum : '',
      representative : '',
      snapshotStateRepo : ''
    }));
    mockAuthService.getUser.and.returnValue({ id: '101', role: 'foo'});

    component.ngOnInit();

    expect(spyObj).toHaveBeenCalledWith('101');
    expect(component.loggedUser).toEqual('test');
  });
});

class MockRouter {}
