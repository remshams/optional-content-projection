import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';
import { SlotDirectiveModule } from './ng-content/directives/module';
import { SlotWithDefaultRendererModule } from './ng-content/slot-with-default-renderer/module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SlotWithDefaultRendererModule, SlotDirectiveModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
