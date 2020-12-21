import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'dnd-image-input',
  templateUrl: './dnd-image-input.component.html',
  styleUrls: ['./dnd-image-input.component.scss'],
})
export class DndImageInputComponent implements OnInit {
  @Input() placeholder: string | undefined;
  @Input() image: string | SafeUrl | undefined;
  @Input() text: string | undefined;
  @Input() style: any;
  @Input() onUpload: Function | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getImageSize(): string {
    return this.text ? '80%' : '100%';
  }

  onChange(event: any): void {
    const file = event.target.files[0];
    this.setImageFromFile(file);

    if (this.onUpload) {
      this.onUpload(file);
    }
  }

  onDrop(files: Array<File>): void {
    const file = files[0];
    this.setImageFromFile(file);

    if (this.onUpload && file) {
      this.onUpload(file);
    }
  }

  private setImageFromFile(file: File): void {
    const reader = new FileReader();
    const sanitizer = this.sanitizer;
    const self = this;
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const result = reader.result;
      if (result as string) {
        self.image = sanitizer.bypassSecurityTrustUrl(result as string);
      }
    };
  }
}
