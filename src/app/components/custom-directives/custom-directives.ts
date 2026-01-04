import { Component } from '@angular/core';
import { Effect } from '../../directives/effect';
import { HoverEffect } from '../../directives/hover-effect';

@Component({
  selector: 'app-custom-directives',
  imports: [
    Effect,
    HoverEffect,
  ],
  templateUrl: './custom-directives.html',
  styles: ``,
})
export class CustomDirectives {

}
