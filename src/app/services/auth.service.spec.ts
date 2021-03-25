import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // todo: complete when another approach will be used
  it('should return true when login', () => {
    spyOn(service.credentials, 'find').and.returnValue({} as any);
    const actualValue = service.login('foo', 'boo');

    expect(service.credentials.find).toHaveBeenCalled();
    expect(actualValue).toBeTruthy();
  });

  // todo: complete when another approach will be used
  it('should return false when login', () => {
    spyOn(service.credentials, 'find').and.returnValue(undefined);
    const actualValue = service.login('foo', 'boo');

    expect(service.credentials.find).toHaveBeenCalled();
    expect(actualValue).toBeFalsy();
  });

  it('should return true when logout called', () => {
    spyOn(localStorage.__proto__, 'removeItem').withArgs('token').and.stub();
    const actualValue = service.logout();

    expect(localStorage.__proto__.removeItem).toHaveBeenCalled();
    expect(actualValue).toBeTruthy();
  });

  it('should return true when loggedIn called', () => {
    spyOn(localStorage.__proto__, 'getItem').withArgs('token').and.returnValue('token');
    const actualValue = service.loggedIn();

    expect(localStorage.__proto__.getItem).toHaveBeenCalled();
    expect(actualValue).toBeTruthy();
  });

  it('should return false when loggedIn called', () => {
    spyOn(localStorage.__proto__, 'getItem').withArgs('token').and.returnValue(null);
    const actualValue = service.loggedIn();

    expect(localStorage.__proto__.getItem).toHaveBeenCalled();
    expect(actualValue).toBeFalsy();
  });

  it('should return true when isPrincipal called', () => {
    spyOn(service, 'getUser').and.returnValue({ id: null, role: 'secretary' });
    const actualValue = service.isPrincipal();

    expect(actualValue).toBeTruthy();
  });

  it('should return false when isPrincipal called', () => {
    spyOn(service, 'getUser').and.returnValue({ id: null, role: 'foo' });
    const actualValue = service.isPrincipal();

    expect(actualValue).toBeFalsy();
  });

  it('should return true when isManager called', () => {
    spyOn(service, 'getUser').and.returnValue({ id: null, role: 'manager' });
    const actualValue = service.isManager();

    expect(actualValue).toBeTruthy();
  });

  it('should return false when isPrincipal called', () => {
    spyOn(service, 'getUser').and.returnValue({ id: null, role: 'foo' });
    const actualValue = service.isManager();

    expect(actualValue).toBeFalsy();
  });

  it('should return User when getUser called', () => {
    spyOn(localStorage.__proto__, 'getItem').withArgs('token').and.returnValue('Zm9vOmJvbw=='); // encoded User('foo', 'boo')
    const actualValue = service.getUser();

    expect(actualValue.id).toEqual('foo');
    expect(actualValue.role).toEqual('boo');
  });

  it('should return undefined when getUser called', () => {
    spyOn(localStorage.__proto__, 'getItem').withArgs('token').and.returnValue('fooBoo');
    const actualValue = service.getUser();

    expect(actualValue).toBeFalsy();
  });
});
