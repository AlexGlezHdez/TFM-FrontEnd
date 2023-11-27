import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMenuComponent } from './member-menu.component';

describe('MembersMenuComponent', () => {
  let component: MemberMenuComponent;
  let fixture: ComponentFixture<MemberMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberMenuComponent],
    });
    fixture = TestBed.createComponent(MemberMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
