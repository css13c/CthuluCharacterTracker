import { Component, Input, OnInit } from '@angular/core';
import {
  InvestigatorSkill,
  InvestigatorStat,
} from 'src/app/character-sheet/types/character';

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
