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
import { NumberStatusComponent } from './components/number-status/number-status.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    CharacterSheetComponent,
    CharacterStatsComponent,
    StatBoxComponent,
    StatLabelComponent,
    NumberStatusComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CharacterSheetRoutingModule,
    ReactiveFormsModule,
    GlobalModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
  exports: [CharacterSheetComponent, CharacterStatsComponent],
})
export class CharacterSheetModule {}
