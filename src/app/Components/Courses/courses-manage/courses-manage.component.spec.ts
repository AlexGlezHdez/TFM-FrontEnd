import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesManageComponent } from './courses-manage.component.ts';

describe('CoursesManageComponent', () => {
  let component: CoursesManageComponent;
  let fixture: ComponentFixture<CoursesManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesManageComponent],
    });
    fixture = TestBed.createComponent(CoursesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
