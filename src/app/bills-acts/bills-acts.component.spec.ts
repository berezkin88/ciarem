import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsActsComponent } from './bills-acts.component';

describe('BillsActsComponent', () => {
  let component: BillsActsComponent;
  let fixture: ComponentFixture<BillsActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsActsComponent ]
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
});
