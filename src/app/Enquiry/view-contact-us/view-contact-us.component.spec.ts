import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactUsComponent } from './view-contact-us.component';

describe('ViewContactUsComponent', () => {
  let component: ViewContactUsComponent;
  let fixture: ComponentFixture<ViewContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
