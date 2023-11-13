import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActivitiesComponent } from './member-activities.component';

describe('MemberActivitiesComponent', () => {
  let component: MemberActivitiesComponent;
  let fixture: ComponentFixture<MemberActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberActivitiesComponent]
    });
    fixture = TestBed.createComponent(MemberActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
