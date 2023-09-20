import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductCardComponent } from './featured-product-card.component';

describe('FeaturedProductCardComponent', () => {
  let component: FeaturedProductCardComponent;
  let fixture: ComponentFixture<FeaturedProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedProductCardComponent]
    });
    fixture = TestBed.createComponent(FeaturedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
