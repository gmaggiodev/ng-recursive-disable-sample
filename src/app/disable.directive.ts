import { ContentChildren, Directive, effect, inject, input, model, QueryList, ViewChildren, viewChildren } from '@angular/core';

@Directive({
  selector: '[appDisableDirective]'
})
export class DisableDirective {

  public disabled = model(false);
  public id = input('default');

  // Children of this directive can set the disabled property
  @ContentChildren(DisableDirective) contentCanBeDisabled!: QueryList<DisableDirective>;
  @ViewChildren(DisableDirective) childrenCanBeDisabled!: QueryList<DisableDirective>;

  constructor() {
    // Create an effect that reacts to changes in disabled
    effect(() => {
      console.log('Propagating disabled state:', this.disabled());
      console.log('Content Children:', this.contentCanBeDisabled);

      this.contentCanBeDisabled?.forEach((child) => {
        child.disabled.set(this.disabled());
      });
    });
  }

}
