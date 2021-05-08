import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Templates } from '../../shared/model';

@Component({
  selector: 'app-render-props',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderPropsComponent {
  @Input() templates: Partial<Templates> = {};
}
