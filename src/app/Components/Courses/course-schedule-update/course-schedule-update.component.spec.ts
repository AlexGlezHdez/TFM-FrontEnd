import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseScheduleUpdateComponent } from './course-schedule-update.component';

describe('CourseScheduleUpdateComponent', () => {
  let component: CourseScheduleUpdateComponent;
  let fixture: ComponentFixture<CourseScheduleUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseScheduleUpdateComponent]
    });
    fixture = TestBed.createComponent(CourseScheduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
