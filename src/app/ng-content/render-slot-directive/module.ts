import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RenderSlotDirectiveComponent } from './components/component';
import { SlotRendererComponent } from './components/slot-renderer/component';

@NgModule({
  declarations: [RenderSlotDirectiveComponent, SlotRendererComponent],
  imports: [CommonModule],
  exports: [RenderSlotDirectiveComponent]
})
export class RenderSlotDirectiveModule {}
