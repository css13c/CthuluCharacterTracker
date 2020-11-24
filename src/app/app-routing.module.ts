import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "character" },
  {
    path: "character",
    component: CharacterSheetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
