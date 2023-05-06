import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteInventoryComponent } from './website-inventory.component';

describe('WebsiteInventoryComponent', () => {
  let component: WebsiteInventoryComponent;
  let fixture: ComponentFixture<WebsiteInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
