import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';
import { UsingNgContentModule } from './ng-content/module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UsingNgContentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
