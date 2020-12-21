import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberStatusComponent } from './number-status.component';

describe('NumberStatusComponent', () => {
  let component: NumberStatusComponent;
  let fixture: ComponentFixture<NumberStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
