import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlotWithDefaultRendererComponent } from './components/component';
import { SlotRendererComponent } from './components/slot-renderer/component';

@NgModule({
  declarations: [SlotWithDefaultRendererComponent, SlotRendererComponent],
  imports: [CommonModule],
  exports: [SlotWithDefaultRendererComponent]
})
export class SlotWithDefaultRendererModule {}
