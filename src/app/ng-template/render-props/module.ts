import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTemplateSharedModule } from '../shared/module';
import { RenderPropsComponent } from './components/component';

@NgModule({
  declarations: [RenderPropsComponent],
  imports: [CommonModule, NgTemplateSharedModule],
  exports: [RenderPropsComponent]
})
export class RenderPropsModule {}
