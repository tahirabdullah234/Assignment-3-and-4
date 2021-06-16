import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttemptAssignmentComponent } from './view-attempt-assignment.component';

describe('ViewAttemptAssignmentComponent', () => {
  let component: ViewAttemptAssignmentComponent;
  let fixture: ComponentFixture<ViewAttemptAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttemptAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttemptAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
