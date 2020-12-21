import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { ExampleComponent } from './shared/example/example.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CharacterSheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
