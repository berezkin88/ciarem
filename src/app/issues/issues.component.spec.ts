import { EMPTY } from 'rxjs';
import { IssuesService } from './../services/issues.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesComponent ],
      providers: [
        { provide: IssuesService, useClass: MockIssuesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockIssuesService {
  getAllIssues(): any {
    return EMPTY;
  }
}
