import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCUsersComponent } from './kyc-users.component';

describe('KYCUsersComponent', () => {
  let component: KYCUsersComponent;
  let fixture: ComponentFixture<KYCUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KYCUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KYCUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
