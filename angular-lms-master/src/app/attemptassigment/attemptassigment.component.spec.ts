import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptassigmentComponent } from './attemptassigment.component';

describe('AttemptassigmentComponent', () => {
  let component: AttemptassigmentComponent;
  let fixture: ComponentFixture<AttemptassigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptassigmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptassigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
