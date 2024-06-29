import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyfinditemComponent } from './royfinditem.component';

describe('RoyfinditemComponent', () => {
  let component: RoyfinditemComponent;
  let fixture: ComponentFixture<RoyfinditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoyfinditemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyfinditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
