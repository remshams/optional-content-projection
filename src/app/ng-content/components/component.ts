import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-or-default',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentOrDefaultComponent {}
