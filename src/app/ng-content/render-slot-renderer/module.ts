import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RenderSlotSlotRendererComponent } from './components/component';
import { SlotRendererComponent } from './components/slot-renderer/component';

@NgModule({
  declarations: [RenderSlotSlotRendererComponent, SlotRendererComponent],
  imports: [CommonModule],
  exports: [RenderSlotSlotRendererComponent]
})
export class RenderSlotSlotRendererModule {}
