import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIOrderManagementComponent } from './api-order-management.component';

describe('APIOrderManagementComponent', () => {
  let component: APIOrderManagementComponent;
  let fixture: ComponentFixture<APIOrderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIOrderManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIOrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
