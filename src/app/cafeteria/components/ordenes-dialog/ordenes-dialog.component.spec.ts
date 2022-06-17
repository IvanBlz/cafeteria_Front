import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesDialogComponent } from './ordenes-dialog.component';

describe('OrdenesDialogComponent', () => {
  let component: OrdenesDialogComponent;
  let fixture: ComponentFixture<OrdenesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
