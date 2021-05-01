import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlotWithDefaultComponent } from './components/component';

@NgModule({
  declarations: [SlotWithDefaultComponent],
  imports: [CommonModule],
  exports: [SlotWithDefaultComponent]
})
export class SlotWithDefaultModule {}
