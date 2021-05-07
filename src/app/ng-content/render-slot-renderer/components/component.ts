import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-render-slot-slot-renderer',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderSlotSlotRendererComponent {}
