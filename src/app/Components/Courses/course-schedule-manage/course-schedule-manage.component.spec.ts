import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseScheduleManageComponent } from './course-schedule-manage.component';

describe('CourseScheduleManageComponent', () => {
  let component: CourseScheduleManageComponent;
  let fixture: ComponentFixture<CourseScheduleManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseScheduleManageComponent]
    });
    fixture = TestBed.createComponent(CourseScheduleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
