import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { CharacterStatsComponent } from './components/character-stats/character-stats.component';
import { StatBoxComponent } from './components/stat-box/stat-box.component';
import { StatLabelComponent } from './components/stat-label/stat-label.component';
import { CharacterSheetComponent } from './character-sheet.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [
    CharacterSheetComponent,
    CharacterStatsComponent,
    StatBoxComponent,
    StatLabelComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CharacterSheetRoutingModule,
    ReactiveFormsModule,
    GlobalModule,
  ],
  exports: [CharacterSheetComponent, CharacterStatsComponent],
})
export class CharacterSheetModule {}
