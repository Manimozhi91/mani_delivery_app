import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddmenuComponent } from './adminaddmenu.component';

describe('AdminaddmenuComponent', () => {
  let component: AdminaddmenuComponent;
  let fixture: ComponentFixture<AdminaddmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminaddmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
