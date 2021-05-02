import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateRenderPropsComponent } from './components/component';
import { RenderTemplateComponent } from './components/render-template/component';

@NgModule({
  declarations: [TemplateRenderPropsComponent, RenderTemplateComponent],
  imports: [CommonModule],
  exports: [TemplateRenderPropsComponent]
})
export class TemplateRenderPropsModule {}
