import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';
import { SlotDirectiveModule } from './ng-content/directives/module';
import { RenderSlotSlotRendererModule } from './ng-content/render-slot-renderer/module';
import { RenderSlotModule } from './ng-content/render-slot/module';
import { RenderPropsDirectiveModule } from './ng-template/render-props-directive/module';
import { TemplateRenderPropsModule } from './ng-template/render-props/module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RenderSlotModule,
    RenderSlotSlotRendererModule,
    SlotDirectiveModule,
    TemplateRenderPropsModule,
    RenderPropsDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
