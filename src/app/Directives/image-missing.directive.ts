import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[imageMissing]',
  standalone: true,
})
export class ImageMissingDirective {
  @Input() imageMissing?: string;
  @HostListener('error', ['$event'])
  handleImageError(event: Event): void {
    const image = event.target as HTMLInputElement;
    image.src = this.imageMissing ?? '/assets/images/not_found.png'; // e.g. ./assets/images/default-image.png
  }
}
