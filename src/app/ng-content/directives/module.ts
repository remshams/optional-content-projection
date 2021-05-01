import { NgModule } from '@angular/core';
import { SlotDirective } from './directive';

@NgModule({
  declarations: [SlotDirective],
  exports: [SlotDirective]
})
export class SlotDirectiveModule {}
