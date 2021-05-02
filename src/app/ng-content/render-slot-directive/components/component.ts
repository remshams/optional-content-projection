import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-render-slot-directive',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderSlotDirectiveComponent {}
