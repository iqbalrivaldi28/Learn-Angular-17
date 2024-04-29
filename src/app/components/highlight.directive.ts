import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) {}

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red'); //? Red itu default value akalu apphightlight kosong
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
}
