import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { RenderTemplates, TemplateTypes } from '../model';

@Component({
  selector: 'app-template-render-props',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateRenderPropsComponent {
  @Input() customTemplates: Partial<RenderTemplates> = {};

  getTemplate(key: TemplateTypes): TemplateRef<{}> | null {
    return this.customTemplates[key] ?? null;
  }
}
