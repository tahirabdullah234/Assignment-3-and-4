import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitassigmentComponent } from './submitassigment.component';

describe('SubmitassigmentComponent', () => {
  let component: SubmitassigmentComponent;
  let fixture: ComponentFixture<SubmitassigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitassigmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitassigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
