import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersManageComponent } from './centers-manage.component';

describe('CentersManageComponent', () => {
  let component: CentersManageComponent;
  let fixture: ComponentFixture<CentersManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentersManageComponent]
    });
    fixture = TestBed.createComponent(CentersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
