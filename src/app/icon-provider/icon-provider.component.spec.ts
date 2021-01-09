import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
