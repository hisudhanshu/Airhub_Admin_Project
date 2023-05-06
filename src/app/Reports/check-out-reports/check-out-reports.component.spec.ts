import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutReportsComponent } from './check-out-reports.component';

describe('CheckOutReportsComponent', () => {
  let component: CheckOutReportsComponent;
  let fixture: ComponentFixture<CheckOutReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
