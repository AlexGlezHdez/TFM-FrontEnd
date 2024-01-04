import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListComponent } from './members-manage.component';

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersListComponent],
    });
    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
