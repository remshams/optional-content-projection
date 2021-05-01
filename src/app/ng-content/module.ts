import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentOrDefaultComponent } from './components/component';
import { SlotWithDefaultComponent } from './components/content-or-default/component';
import { SlotDirective } from './directives/directive';

@NgModule({
  declarations: [ContentOrDefaultComponent, SlotDirective, SlotWithDefaultComponent],
  imports: [CommonModule],
  exports: [ContentOrDefaultComponent, SlotDirective]
})
export class UsingNgContentModule {}
