import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stat-label',
  templateUrl: './stat-label.component.html',
  styleUrls: ['./stat-label.component.scss'],
})
export class StatLabelComponent implements OnInit {
  @Input('value') stat: number | undefined;
  @Input('name') name: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
