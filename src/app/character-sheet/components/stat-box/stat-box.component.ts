import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stat-box',
  templateUrl: './stat-box.component.html',
  styleUrls: ['./stat-box.component.scss']
})
export class StatBoxComponent implements OnInit {
  @Input() value: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getHardSuccess() : number {
    return Math.floor(this.value / 2);
  }

  getExtremeSuccess() : number {
    return Math.floor(this.value / 5);
  }
}

