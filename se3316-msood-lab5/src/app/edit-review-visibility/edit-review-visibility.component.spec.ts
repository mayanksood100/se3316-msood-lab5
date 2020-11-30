import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReviewVisibilityComponent } from './edit-review-visibility.component';

describe('EditReviewVisibilityComponent', () => {
  let component: EditReviewVisibilityComponent;
  let fixture: ComponentFixture<EditReviewVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReviewVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReviewVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
