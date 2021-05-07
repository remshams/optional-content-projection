import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { SlotName, Templates } from '../../shared/model';

@Component({
  selector: 'app-template-render-props',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateRenderPropsComponent {
  @Input() templates: Partial<Templates> = {};

  getTemplate(key: SlotName): TemplateRef<{}> | null {
    return this.templates[key] ?? null;
  }

  hasTemplate(key: SlotName): boolean {
    return !!this.templates[key];
  }
}
