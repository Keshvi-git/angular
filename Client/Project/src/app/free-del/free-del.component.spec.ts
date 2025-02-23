import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDelComponent } from './free-del.component';

describe('FreeDelComponent', () => {
  let component: FreeDelComponent;
  let fixture: ComponentFixture<FreeDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeDelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
