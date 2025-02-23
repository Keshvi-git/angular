import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasNavbarComponent } from './offcanvas-navbar.component';

describe('OffcanvasNavbarComponent', () => {
  let component: OffcanvasNavbarComponent;
  let fixture: ComponentFixture<OffcanvasNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
