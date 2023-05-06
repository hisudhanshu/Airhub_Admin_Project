import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargableTopupComponent } from './rechargable-topup.component';

describe('RechargableTopupComponent', () => {
  let component: RechargableTopupComponent;
  let fixture: ComponentFixture<RechargableTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargableTopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargableTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
