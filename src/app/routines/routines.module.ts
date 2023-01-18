import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutinesPage } from './routines.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RoutinesPageRoutingModule } from './routines-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RoutinesPageRoutingModule
  ],
  declarations: [RoutinesPage]
})
export class RoutinesPageModule {}
