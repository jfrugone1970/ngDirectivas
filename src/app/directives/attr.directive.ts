import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appAttr') highlightColor = '';



  constructor(private _elementref: ElementRef) {


  }

  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.highlightColor || this.defaultColor || 'tomato');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._cambiarColor(null);

  }

  private _cambiarColor(color: string | null){

    this._elementref.nativeElement.style.backgoundColor = color;

  }



}
