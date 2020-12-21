import { Component, Input, OnInit } from '@angular/core';
import { InvestigatorStatBlock } from '../../shared/character';
import { MockCharacter } from '../../shared/mock-data/mock-character';

@Component({
  selector: 'character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss'],
})
export class CharacterStatsComponent implements OnInit {
  @Input('stats')
  statBlock: InvestigatorStatBlock | undefined = undefined;
  @Input('age')
  age: number | undefined = undefined;

  constructor() {
    this.statBlock = MockCharacter.stats;
    this.age = MockCharacter.age;
  }

  ngOnInit(): void {}

  getMoveRate(): number {
    if (
      !this.statBlock?.dexterity ||
      !this.statBlock?.strength ||
      !this.statBlock?.size ||
      !this.age
    ) {
      return -1;
    }

    const strGrSize = this.statBlock.strength > this.statBlock.size;
    const dexGrSize = this.statBlock.strength > this.statBlock.size;
    let baseMove = 7;
    if (dexGrSize && strGrSize) {
      baseMove = 9;
    } else if (dexGrSize || strGrSize) {
      baseMove = 8;
    }

    const agePenalty = this.getAgePenalty(this.age);
    return baseMove - agePenalty;
  }

  private getAgePenalty(age: number): number {
    if (age >= 40 && age < 50) {
      return 1;
    } else if (age >= 50 && age < 60) {
      return 2;
    } else if (age >= 60 && age < 70) {
      return 3;
    } else if (age >= 70 && age < 80) {
      return 4;
    } else if (age >= 80 && age < 90) {
      return 5;
    }

    return 0;
  }
}
