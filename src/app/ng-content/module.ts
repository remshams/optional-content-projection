import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsingNgContentComponent } from './components/component';

@NgModule({
  declarations: [UsingNgContentComponent],
  imports: [CommonModule],
  exports: [UsingNgContentComponent]
})
export class UsingNgContentModule {}
