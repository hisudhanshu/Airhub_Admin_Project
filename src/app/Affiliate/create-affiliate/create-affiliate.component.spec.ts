import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAffiliateComponent } from './create-affiliate.component';

describe('CreateAffiliateComponent', () => {
  let component: CreateAffiliateComponent;
  let fixture: ComponentFixture<CreateAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
