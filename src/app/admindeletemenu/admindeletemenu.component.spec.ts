import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeletemenuComponent } from './admindeletemenu.component';

describe('AdmindeletemenuComponent', () => {
  let component: AdmindeletemenuComponent;
  let fixture: ComponentFixture<AdmindeletemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindeletemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindeletemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
