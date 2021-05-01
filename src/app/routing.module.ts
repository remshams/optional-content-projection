import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'UsingNgContent',
    pathMatch: 'full'
  },
  {
    path: 'UsingNgContent',
    loadChildren: () => import('./ng-content/module').then(m => m.UsingNgContentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
