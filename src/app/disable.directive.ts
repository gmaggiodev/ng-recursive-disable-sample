import { ContentChildren, Directive, effect, ElementRef, inject, input, model, QueryList, ViewChildren, viewChildren } from '@angular/core';

@Directive({
  selector: '[appDisableDirective]',
  standalone: true
})
export class DisableDirective {

  public disabled = model(false);
  public id = input('default');
  public static counter = 0

  // Children of this directive can set the disabled property
  @ContentChildren(DisableDirective, {descendants: true}) contentCanBeDisabled!: QueryList<DisableDirective>;

  tag = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {

    // Create an effect that reacts to changes in disabled
    effect(() => {
      // console.log('Propagating disabled state:', this.disabled());
      // console.log('Content Children: ', this.contentCanBeDisabled);
      console.log('Tag Name: ', this.tag.tagName);
      this.contentCanBeDisabled?.forEach((child) => {
        child.disabled.set(this.disabled());
      });
    }, { allowSignalWrites: true });
  }

}
