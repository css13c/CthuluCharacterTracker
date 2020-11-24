import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndImageInputComponent } from './components/dnd-image-input/dnd-image-input.component';
import { FileDropUploadDirective } from './directives/file-drop-upload/file-drop-upload.directive';

@NgModule({
  declarations: [DndImageInputComponent, FileDropUploadDirective],
  imports: [CommonModule],
  exports: [DndImageInputComponent, FileDropUploadDirective],
})
export class GlobalModule {}
