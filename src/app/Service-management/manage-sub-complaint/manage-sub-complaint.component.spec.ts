import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubComplaintComponent } from './manage-sub-complaint.component';

describe('ManageSubComplaintComponent', () => {
  let component: ManageSubComplaintComponent;
  let fixture: ComponentFixture<ManageSubComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSubComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
