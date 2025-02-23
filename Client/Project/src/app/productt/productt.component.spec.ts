import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttComponent } from './productt.component';

describe('ProducttComponent', () => {
  let component: ProducttComponent;
  let fixture: ComponentFixture<ProducttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducttComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
