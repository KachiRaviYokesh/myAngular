import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEffect]'
})
export class Effect implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'mb-1');
    this.renderer.addClass(this.el.nativeElement, 'border');
    this.renderer.addClass(this.el.nativeElement, 'border-red-500');
    this.renderer.addClass(this.el.nativeElement, 'bg-red-200');
    this.renderer.addClass(this.el.nativeElement, 'text-center');
  }

}
