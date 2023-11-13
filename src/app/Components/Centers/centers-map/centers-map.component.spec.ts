import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersMapComponent } from './centers-map.component';

describe('CentersMapComponent', () => {
  let component: CentersMapComponent;
  let fixture: ComponentFixture<CentersMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentersMapComponent]
    });
    fixture = TestBed.createComponent(CentersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
