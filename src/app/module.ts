import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';
import { SlotDirectiveModule } from './ng-content/directives/module';
import { SlotWithDefaultRendererModule } from './ng-content/slot-with-default-renderer/module';
import { SlotWithDefaultModule } from './ng-content/slot-with-default/module';
import { RenderPropsDirectiveModule } from './ng-template/render-props-directive/module';
import { TemplateRenderPropsModule } from './ng-template/render-props/module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SlotWithDefaultModule,
    SlotWithDefaultRendererModule,
    SlotDirectiveModule,
    TemplateRenderPropsModule,
    RenderPropsDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
