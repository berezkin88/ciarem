import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['loggedIn']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService },
      ],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true', () => {
    mockAuthService.loggedIn.and.returnValue(true);
    const actualValue = service.canActivate(null, null);

    expect(actualValue).toBeTruthy();
  });

  it('should return false', () => {
    const mockState = jasmine.createSpyObj('RouterStateSnapshot', ['url']);

    mockAuthService.loggedIn.and.returnValue(false);
    mockRouter.navigate.withArgs(['/login'], { queryParams: { returnUrl: mockState.url } }).and.stub();
    mockState.url.and.stub();

    const actualValue = service.canActivate(null, mockState);

    expect(actualValue).toBeFalsy();
  });
});
