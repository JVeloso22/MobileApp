import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedroomPage } from './bedroom.page';
import { BlindsComponent } from './devices/blinds/blinds.component';
import { FansComponent } from './devices/fans/fans.component';
import { LightsComponent } from './devices/lights/lights.component';
import { TempComponent } from './devices/temp/temp.component';

const routes: Routes = [
  {
    path: '',
    component: BedroomPage,
    children: [
      {
        path: 'lights',
        component: LightsComponent
      },
      {
        path: 'temp',
        component: TempComponent
      },
      {
        path: 'fans',
        component: FansComponent
      },
      {
        path: 'blinds',
        component: BlindsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedroomPageRoutingModule {}
