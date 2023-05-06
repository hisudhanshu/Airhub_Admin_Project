import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H20ReportsComponent } from './h20-reports.component';

describe('H20ReportsComponent', () => {
  let component: H20ReportsComponent;
  let fixture: ComponentFixture<H20ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H20ReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H20ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
