import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTemplateSharedModule } from '../shared/module';
import { RenderPropsDirectiveComponent } from './components/component';
import { TemplateSlotDirective } from './directives/template-slot/directive';

@NgModule({
  declarations: [RenderPropsDirectiveComponent, TemplateSlotDirective],
  imports: [CommonModule, NgTemplateSharedModule],
  exports: [RenderPropsDirectiveComponent, TemplateSlotDirective]
})
export class RenderPropsDirectiveModule {}
