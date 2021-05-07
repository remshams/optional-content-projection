import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Templates } from '../../shared/model';

@Component({
  selector: 'app-template-render-props',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateRenderPropsComponent {
  @Input() templates: Partial<Templates> = {};
}
