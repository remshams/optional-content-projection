import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';
import { SlotDirectiveModule } from './ng-content/directives/module';
import { RenderSlotDirectiveModule } from './ng-content/render-slot-directive/module';
import { RenderSlotModule } from './ng-content/render-slot/module';
import { RenderPropsDirectiveModule } from './ng-template/render-props-directive/module';
import { TemplateRenderPropsModule } from './ng-template/render-props/module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RenderSlotModule,
    RenderSlotDirectiveModule,
    SlotDirectiveModule,
    TemplateRenderPropsModule,
    RenderPropsDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
