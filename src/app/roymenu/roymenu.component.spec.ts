import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoymenuComponent } from './roymenu.component';

describe('RoymenuComponent', () => {
  let component: RoymenuComponent;
  let fixture: ComponentFixture<RoymenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoymenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
