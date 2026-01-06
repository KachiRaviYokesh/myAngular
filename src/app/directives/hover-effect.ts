import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})

// export class HoverEffect implements OnInit {

//   constructor(private el:ElementRef, private renderer: Renderer2) { }
  
//   ngOnInit(): void {
//     this.renderer.addClass(this.el.nativeElement, 'mb-1');
//     this.renderer.addClass(this.el.nativeElement, 'border');
//     this.renderer.addClass(this.el.nativeElement, 'border-blue-500');
//     this.renderer.addClass(this.el.nativeElement, 'bg-blue-200');
//     this.renderer.addClass(this.el.nativeElement, 'text-center');
//   }

//   @HostListener('mouseenter') cursorEnter() {
//     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'dodgerblue');
//   }

//   @HostListener('mouseout') cursorOut() {
//     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
//   }
// }

export class HoverEffect implements OnInit {

  constructor(private el:ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'border');
    this.renderer.addClass(this.el.nativeElement, 'border-blue-500');
    this.renderer.addClass(this.el.nativeElement, 'text-center');
    this.renderer.addClass(this.el.nativeElement, 'flex-grow');
  }

  @Input() preferedClr:string = '';

  @HostBinding('style.backgroundColor') bgColor:string = 'transparent';

  @HostListener('mouseenter') cursorEnter() {
    this.bgColor = this.preferedClr;
  }
  
  @HostListener('mouseout') cursorOut() {
    this.bgColor = 'transparent';    
  }
}
