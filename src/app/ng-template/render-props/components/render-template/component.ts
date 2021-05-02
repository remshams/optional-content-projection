import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { TemplateDefinition } from './model';

@Component({
  selector: 'app-render-template',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderTemplateComponent<Template extends TemplateRef<unknown> = TemplateRef<unknown>> {
  @Input() template: TemplateDefinition<Template> | null = null;

  customOrDefaultTemplate(): Template | null {
    return this.template?.customTemplate ?? this.template?.defaultTemplate ?? null;
  }
}
