import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLabelComponent } from './stat-label.component';

describe('StatLabelComponent', () => {
  let component: StatLabelComponent;
  let fixture: ComponentFixture<StatLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
