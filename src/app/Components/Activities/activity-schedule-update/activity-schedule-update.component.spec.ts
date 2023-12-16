import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityScheduleUpdateComponent } from './activity-schedule-update.component';

describe('ActivityScheduleUpdateComponent', () => {
  let component: ActivityScheduleUpdateComponent;
  let fixture: ComponentFixture<ActivityScheduleUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityScheduleUpdateComponent]
    });
    fixture = TestBed.createComponent(ActivityScheduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
