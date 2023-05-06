import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogExternalComponent } from './manage-blog-external.component';

describe('ManageBlogExternalComponent', () => {
  let component: ManageBlogExternalComponent;
  let fixture: ComponentFixture<ManageBlogExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBlogExternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBlogExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
