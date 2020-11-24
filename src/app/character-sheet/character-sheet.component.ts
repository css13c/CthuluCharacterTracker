import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { CthuluInvestigator } from './types/character';
import { MockCharacter } from './types/mock-data/mock-character';

@Component({
  selector: 'character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
  @Input() character: CthuluInvestigator | undefined;

  constructor(private fb: FormBuilder) {
    this.character = MockCharacter;
  }

  ngOnInit(): void {}

  onImageUpload(file: File): void {
    console.log('AHHHHH');
  }
}
