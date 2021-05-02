import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { Templates, TemplateTypes } from '../../shared/model';

@Component({
  selector: 'app-template-render-props',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateRenderPropsComponent {
  @Input() templates: Partial<Templates> = {};

  getTemplate(key: TemplateTypes): TemplateRef<{}> | null {
    return this.templates[key] ?? null;
  }

  hasTemplate(key: TemplateTypes): boolean {
    return !!this.templates[key];
  }
}
