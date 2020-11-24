import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[fileDropUpload]',
})
export class FileDropUploadDirective {
  constructor(private el: ElementRef) {
    this.startColor = el.nativeElement.style.background;
    this.background = this.startColor;
  }

  @Output() fileDropped = new EventEmitter<any>();

  @Input('dragHoverColor')
  dragColor!: string;

  @HostBinding('style.background-color')
  private background: string;

  private startColor: string;

  @HostListener('dragover', ['$event'])
  dragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.dragColor;
  }

  @HostListener('dragleave', ['$event'])
  public dragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.startColor;
  }

  @HostListener('drop', ['$event'])
  public drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.startColor;
    const files = event.target.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
