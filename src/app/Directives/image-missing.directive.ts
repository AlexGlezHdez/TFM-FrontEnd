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
    image.src = this.imageMissing ?? '/assets/images/news/not_found.webp'; // e.g. ./assets/images/default-image.png
  }
}
