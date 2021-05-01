import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsingNgContentComponent } from './components/component';
import { UsingNgContentRoutingModule } from './routing.module';

@NgModule({
  declarations: [UsingNgContentComponent],
  imports: [CommonModule, UsingNgContentRoutingModule]
})
export class UsingNgContentModule {}
