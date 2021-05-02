import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RenderTemplateComponent } from './components/render-template/component';

@NgModule({
  declarations: [RenderTemplateComponent],
  imports: [CommonModule],
  exports: [RenderTemplateComponent]
})
export class NgTemplateSharedModule {}
