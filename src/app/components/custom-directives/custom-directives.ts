import { Component, signal } from '@angular/core';
import { Effect } from '../../directives/effect';
import { HoverEffect } from '../../directives/hover-effect';
import { InputChanges } from '../../directives/input-changes';
import { ConditionalEffect } from '../../directives/conditional-effect';

@Component({
  selector: 'app-custom-directives',
  imports: [
    Effect,
    HoverEffect,
    InputChanges,
    ConditionalEffect
  ],
  templateUrl: './custom-directives.html',
  styles: ``,
})
export class CustomDirectives {
  public inputVal = 'I am from Component';
  public defaultState = signal<boolean>(false);
  public triggerDisable() {
    this.defaultState.update((val:boolean) => {
      return !val;
    })
  }
}
