import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateComponent } from './new-update.component';

describe('NewUpdateComponent', () => {
  let component: NewUpdateComponent;
  let fixture: ComponentFixture<NewUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUpdateComponent]
    });
    fixture = TestBed.createComponent(NewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
