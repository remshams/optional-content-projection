import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Templates } from '../../model';

@Component({
  selector: 'app-render-props-directive',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderPropsDirectiveComponent {
  templates: Partial<Templates> = {};
}
