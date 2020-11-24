import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndImageInputComponent } from './dnd-image-input.component';

describe('DndImageInputComponent', () => {
  let component: DndImageInputComponent;
  let fixture: ComponentFixture<DndImageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndImageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
