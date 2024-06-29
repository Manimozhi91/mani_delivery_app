import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyrestaurantComponent } from './royrestaurant.component';

describe('RoyrestaurantComponent', () => {
  let component: RoyrestaurantComponent;
  let fixture: ComponentFixture<RoyrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoyrestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
