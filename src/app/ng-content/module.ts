import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsingNgContentComponent } from './components/component';
import { SlotDirective } from './directives/directive';

@NgModule({
  declarations: [UsingNgContentComponent, SlotDirective],
  imports: [CommonModule],
  exports: [UsingNgContentComponent, SlotDirective]
})
export class UsingNgContentModule {}
