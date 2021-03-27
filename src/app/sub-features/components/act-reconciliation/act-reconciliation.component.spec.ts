import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActReconciliationComponent } from './act-reconciliation.component';

describe('ActReconciliationComponent', () => {
  let component: ActReconciliationComponent;
  let fixture: ComponentFixture<ActReconciliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActReconciliationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
