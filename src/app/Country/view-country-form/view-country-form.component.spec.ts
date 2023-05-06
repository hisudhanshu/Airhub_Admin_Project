import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountryFormComponent } from './view-country-form.component';

describe('ViewCountryFormComponent', () => {
  let component: ViewCountryFormComponent;
  let fixture: ComponentFixture<ViewCountryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCountryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
