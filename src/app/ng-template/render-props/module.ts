import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTemplateSharedModule } from '../shared/module';
import { TemplateRenderPropsComponent } from './components/component';

@NgModule({
  declarations: [TemplateRenderPropsComponent],
  imports: [CommonModule, NgTemplateSharedModule],
  exports: [TemplateRenderPropsComponent]
})
export class TemplateRenderPropsModule {}
