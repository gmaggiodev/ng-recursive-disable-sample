import { Component, computed, ContentChild, inject, input, TemplateRef, ViewChild } from '@angular/core';
import { DisableDirective } from '../disable.directive';
import { ButtonComponent } from '../button/button.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-panel',
  imports: [ButtonComponent, NgTemplateOutlet],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  hostDirectives: [{directive: DisableDirective, inputs: ['disabled','id'], }],
  standalone: true
})
export class PanelComponent {
  public title = input('Panel Component');


  @ContentChild('footerTemplate') protected footerTemplate!: TemplateRef<any>;

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
