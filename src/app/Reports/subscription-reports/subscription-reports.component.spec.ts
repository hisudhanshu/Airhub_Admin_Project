import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionReportsComponent } from './subscription-reports.component';

describe('SubscriptionReportsComponent', () => {
  let component: SubscriptionReportsComponent;
  let fixture: ComponentFixture<SubscriptionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
