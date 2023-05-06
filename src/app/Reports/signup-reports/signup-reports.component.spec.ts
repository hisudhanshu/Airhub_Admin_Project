import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupReportsComponent } from './signup-reports.component';

describe('SignupReportsComponent', () => {
  let component: SignupReportsComponent;
  let fixture: ComponentFixture<SignupReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
