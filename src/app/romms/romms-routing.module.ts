import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RommsPage } from './romms.page';

const routes: Routes = [
  {
    path: '',
    component: RommsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RommsPageRoutingModule {}
