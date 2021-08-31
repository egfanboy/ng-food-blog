import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
})
export class HighlightDirective {
  @Input() color = '';
  @Input() defaultColor = 'initial';

  initialColor = '';

  @HostListener('mouseenter')
  onMouseOver() {
    this.setColor(this.color);
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.setColor(this.defaultColor);
  }

  setColor(color: string) {
    if (color) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }

  constructor(private el: ElementRef) {}
}
