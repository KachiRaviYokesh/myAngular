import { Directive, ElementRef, input, Input, OnChanges, Renderer2, signal, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appConditionalEffect]'
})
export class ConditionalEffect implements OnChanges {

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) { }

  receivedBoolean = input<boolean>(false);

  ngOnChanges(changes: SimpleChanges): void {
    if(this.receivedBoolean()) {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', 'true');
      this.renderer.setProperty(this.el.nativeElement, 'value', 'Disabled');
    }
    else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      this.renderer.setProperty(this.el.nativeElement, 'value', 'Enabled');
    }
  }
}
