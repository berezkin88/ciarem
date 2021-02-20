import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faClipboardCheck, faExclamationTriangle, faHourglassHalf, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Status } from '../models/status';

import { IconProviderComponent } from './icon-provider.component';

describe('IconProviderComponent', () => {
  let component: IconProviderComponent;
  let fixture: ComponentFixture<IconProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have complete icon', () => {
    component.status = Status.COMPLETE;
    component.ngOnInit();
    expect(component.icon).toEqual(faClipboardCheck);
    expect(component.iconColor).toEqual('icon-green');
  });

  it('should have pending icon', () => {
    component.status = Status.PENDING;
    component.ngOnInit();
    expect(component.icon).toEqual(faHourglassHalf);
    expect(component.iconColor).toEqual('icon-grey');
  });

  it('should have complete icon', () => {
    component.status = Status.FAILED;
    component.ngOnInit();
    expect(component.icon).toEqual(faExclamationTriangle);
    expect(component.iconColor).toEqual('icon-red');
  });

  it('should have unknown icon', () => {
    component.status = Status.UNKNOWN;
    component.ngOnInit();
    expect(component.icon).toEqual(faQuestionCircle);
    expect(component.iconColor).toEqual('icon-red');
  });
});
