import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RenderSlotComponent } from './components/component';

@NgModule({
  declarations: [RenderSlotComponent],
  imports: [CommonModule],
  exports: [RenderSlotComponent]
})
export class RenderSlotModule {}
