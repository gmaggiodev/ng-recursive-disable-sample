import { Component, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule } from '@angular/forms';
import { DisableDirective } from './disable.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PanelComponent, ButtonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class AppComponent {
  title = 'recursive-disable';
  public messages: string[] = [];
  public disabled1 = false;
  public disabled2 = false;
  public disabled3 = false;

  @ViewChildren(DisableDirective) childrenCanBeDisabled!: QueryList<DisableDirective>;



}
