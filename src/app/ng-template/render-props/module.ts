import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateRenderPropsComponent } from './components/component';

@NgModule({
  declarations: [TemplateRenderPropsComponent],
  imports: [CommonModule],
  exports: [TemplateRenderPropsComponent]
})
export class TemplateRenderPropsModule {}
