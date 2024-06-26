import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatemenuComponent } from './adminupdatemenu.component';

describe('AdminupdatemenuComponent', () => {
  let component: AdminupdatemenuComponent;
  let fixture: ComponentFixture<AdminupdatemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminupdatemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdatemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
