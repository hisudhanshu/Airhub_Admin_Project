import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAffiliateComponent } from './view-affiliate.component';

describe('ViewAffiliateComponent', () => {
  let component: ViewAffiliateComponent;
  let fixture: ComponentFixture<ViewAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
