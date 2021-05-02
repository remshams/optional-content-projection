import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RenderPropsDirectiveComponent } from './components/component';

@NgModule({
  declarations: [RenderPropsDirectiveComponent],
  imports: [CommonModule],
  exports: [RenderPropsDirectiveComponent]
})
export class RenderPropsDirectiveModule {}
