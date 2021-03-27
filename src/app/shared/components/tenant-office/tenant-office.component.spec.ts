import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantOfficeComponent } from './tenant-office.component';

describe('TenantOfficeComponent', () => {
  let component: TenantOfficeComponent;
  let fixture: ComponentFixture<TenantOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
