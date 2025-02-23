import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustArrievedComponent } from './just-arrieved.component';

describe('JustArrievedComponent', () => {
  let component: JustArrievedComponent;
  let fixture: ComponentFixture<JustArrievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustArrievedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustArrievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
