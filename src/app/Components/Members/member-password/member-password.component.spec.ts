import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPasswordComponent } from './member-password.component';

describe('MemberPasswordComponent', () => {
  let component: MemberPasswordComponent;
  let fixture: ComponentFixture<MemberPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberPasswordComponent]
    });
    fixture = TestBed.createComponent(MemberPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
