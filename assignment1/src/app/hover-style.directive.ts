import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})

export class HoverStyleDirective {

  constructor(private elm: ElementRef) {
  }

  /**
   * HOVER FOR UNDERLINE
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.underlineMe('underline');
    this.boldMe('bold')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.underlineMe('none');
    this.boldMe('normal');
  }

  private underlineMe(textDecoration: string) {
    this.elm.nativeElement.style.textDecoration = textDecoration || 'underline';
  }

  /**
   * HOVER FOR BOLD TAGS
   */
  private boldMe(fontWeight: string) {
    this.elm.nativeElement.style.fontWeight = fontWeight || 'bold';
  }

}
