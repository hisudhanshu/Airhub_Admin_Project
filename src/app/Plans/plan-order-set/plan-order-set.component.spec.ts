import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOrderSetComponent } from './plan-order-set.component';

describe('PlanOrderSetComponent', () => {
  let component: PlanOrderSetComponent;
  let fixture: ComponentFixture<PlanOrderSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanOrderSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanOrderSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
