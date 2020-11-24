import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CharacterSheetComponent } from './character-sheet.component';

const routes: Routes = [
  { path: "", component: CharacterSheetComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule { }
