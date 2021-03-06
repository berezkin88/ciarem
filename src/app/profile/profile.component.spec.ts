import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';
import { TenantsService } from '../services/tenants.service';

import { ProfileComponent } from './profile.component';
import { of } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockTenantsService: jasmine.SpyObj<TenantsService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  // test users
  const manager = of({
    ceo: 'manager',
    ceoPhoneNum: '+380000000000',
    code: 0,
    email: 'no@gmail.com',
    name: 'manager',
    phoneNum: '+3800000000009',
    representative: 'manager',
    snapshotStateRepo: 'empty',
  });
  const secretary = of({
    ceo: 'secretary',
    ceoPhoneNum: '+380000000000',
    code: 0,
    email: 'no@gmail.com',
    name: 'secretary',
    phoneNum: '+3800000000009',
    representative: 'secretary',
    snapshotStateRepo: 'empty',
  });
  const tenant = of({
    ceo: '',
    ceoPhoneNum: '',
    code: 0,
    email: '',
    name: 'tenant',
    phoneNum: '',
    representative: '',
    snapshotStateRepo: '',
  });

  beforeEach(() => {
    mockTenantsService = jasmine.createSpyObj('TenantsService', [
      'getTenantById',
    ]);
    mockAuthService = jasmine.createSpyObj('AuthService', ['getUser']);

    mockAuthService.getUser.and.returnValue({ id: '000', role: 'manager' });
    mockTenantsService.getTenantById.and.returnValue(manager);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: TenantsService, useValue: mockTenantsService },
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be manager', () => {
    const actualUser = component.tenant.name;

    expect(actualUser).toEqual('manager');
  });

  it('should be tenant', () => {
    mockAuthService.getUser.and.returnValue({ id: '101', role: '' });
    mockTenantsService.getTenantById.and.returnValue(tenant);

    component.ngOnInit();

    const actualUser = component.tenant.name;

    expect(actualUser).toEqual('tenant');
  });
});
