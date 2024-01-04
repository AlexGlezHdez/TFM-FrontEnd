import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsManageComponent } from './authors-manage.component';

describe('AuthorsManageComponent', () => {
  let component: AuthorsManageComponent;
  let fixture: ComponentFixture<AuthorsManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsManageComponent]
    });
    fixture = TestBed.createComponent(AuthorsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
