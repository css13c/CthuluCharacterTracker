import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[fileDrop]',
})
export class FileDropUploadDirective {
  // Directive emits a 'fileDropped' event with the list of files dropped
  @Output('fileDropped')
  fileDropped = new EventEmitter<Array<File>>();

  // Prevents dropping on the body of the document,
  // which stops the browser from loading files if the user misses the drop zone
  @Input()
  preventBodyDrop = true;

  // Add 'drop-zone-active' class when the drag is over target
  @HostBinding('class.drop-zone-active')
  active = false;

  // Drop event
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.active = false;

    const { dataTransfer } = event;
    if (!dataTransfer) {
      return;
    }

    if (dataTransfer.items) {
      const files = [];
      for (let x = 0; x < dataTransfer.items.length; x++) {
        if (dataTransfer.items[x].kind === 'file') {
          // Have to use `as File` since getAsFile returns `File | null` for some reason
          const file = dataTransfer.items[x].getAsFile();
          if (file !== null) {
            files.push(file as File);
          }
        }
      }

      // Clear dataTransfer for immutability purposes
      dataTransfer.items.clear();
      this.fileDropped.emit(files);
    } else {
      const files = dataTransfer.files;
      dataTransfer.clearData();
      this.fileDropped.emit(Array.from(files));
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.active = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    this.active = false;
  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
    }
  }
}
