import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'number-status',
  templateUrl: './number-status.component.html',
  styleUrls: ['./number-status.component.scss'],
})
export class NumberStatusComponent implements OnInit {
  @Input() value: number | undefined;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() maxValue: number | undefined;
  @Input() stackedButtons: boolean = false;
  @Input() includeTooltips: boolean = false;
  @Input() onChange: Function | undefined;
  @Input() altZero: string | undefined;
  @Input() altZeroCondition: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  updateValue(increment: boolean): void {
    if (this.value === undefined) {
      return;
    } else if (
      increment &&
      (!this.maxValue || this.value + 1 < this.maxValue)
    ) {
      this.value += 1;
      this.valueChange.emit(this.value);
    } else if (!increment && this.value - 1 >= 0) {
      this.value -= 1;
      this.valueChange.emit(this.value);
    }
  }
}
