import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityScheduleManageComponent } from './activity-schedule-manage.component';

describe('ActivityScheduleManageComponent', () => {
  let component: ActivityScheduleManageComponent;
  let fixture: ComponentFixture<ActivityScheduleManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityScheduleManageComponent]
    });
    fixture = TestBed.createComponent(ActivityScheduleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
