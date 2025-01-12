import { Component, computed, inject, input } from '@angular/core';
import { DisableDirective } from '../disable.directive';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-panel',
  imports: [ButtonComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  hostDirectives: [{directive: DisableDirective, inputs: ['disabled','id'], }]
})
export class PanelComponent {
  public title = input('Panel Component');
  protected baseDisabledDirective = inject(DisableDirective);

  constructor() { }

  public classes = computed(() => {
    let classes = '';

    if (this.baseDisabledDirective.disabled()) {
      classes += ' panel--disabled';
    }

    return classes;
  });

  public toggle() {
    console.log('Toggling panel');
  }
}
