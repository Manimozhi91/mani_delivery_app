import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcustomerorderComponent } from './findcustomerorder.component';

describe('FindcustomerorderComponent', () => {
  let component: FindcustomerorderComponent;
  let fixture: ComponentFixture<FindcustomerorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindcustomerorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindcustomerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
