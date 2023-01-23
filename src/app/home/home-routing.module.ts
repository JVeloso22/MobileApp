import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPage } from '../intro/intro.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'intro',
    component: IntroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
