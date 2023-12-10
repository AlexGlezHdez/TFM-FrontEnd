import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterUpdateComponent } from './center-update.component';

describe('CenterUpdateComponent', () => {
  let component: CenterUpdateComponent;
  let fixture: ComponentFixture<CenterUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterUpdateComponent]
    });
    fixture = TestBed.createComponent(CenterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
