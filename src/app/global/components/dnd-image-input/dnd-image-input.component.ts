import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, DragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'dnd-image-input',
  templateUrl: './dnd-image-input.component.html',
  styleUrls: ['./dnd-image-input.component.scss'],
})
export class DndImageInputComponent implements OnInit {
  @Input() placeholder: string | undefined;
  @Input() image: string | undefined;
  @Input() text: string | undefined;
  @Input() style: any;
  @Input() onUpload: Function | undefined;

  constructor() {}

  ngOnInit(): void {}

  getImageSize(): string {
    return this.text ? '80%' : '100%';
  }

  onDrop(files: FileList): void {
    console.log('Got files: ' + JSON.stringify(files));
    if (this.onUpload) {
      this.onUpload(files);
    }
  }
}
