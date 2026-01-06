// import { Directive, HostBinding, Input } from '@angular/core';

// @Directive({
//   selector: '[appInputChanges]'
// })
// export class InputChanges {
//     @Input()
//     @HostBinding('attr.value') ipValue:string = '';
// }



import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputChanges]'
})
export class InputChanges implements OnInit {
  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  @HostBinding('attr.value') ipValue:string = '';

  ngOnInit(): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', this.ipValue);
  }

}
