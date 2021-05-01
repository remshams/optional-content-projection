import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsingNgContentComponent } from './components/component';

const routes: Routes = [{ path: '', component: UsingNgContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsingNgContentRoutingModule {}
