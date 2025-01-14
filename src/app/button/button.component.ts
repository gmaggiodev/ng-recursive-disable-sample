import { Component, computed, inject, input } from '@angular/core';
import { DisableDirective } from '../disable.directive';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  hostDirectives: [{directive: DisableDirective, inputs: ['disabled', 'id'], }],
  standalone: true
})
export class ButtonComponent {

  public title = input('Button Component');
  public mode = input('primary');
  protected baseDisabledDirective = inject(DisableDirective);

  constructor() { }

  // when mode changes, update the class using signal
  public classes = computed(() => {
  let classes = '';

    if (this.mode()) {
      classes += ` button__element--${this.mode()}`;
    }

    if (this.baseDisabledDirective.disabled()) {
      classes += ' button__element--disabled';
    }

    return classes;
  });
}
