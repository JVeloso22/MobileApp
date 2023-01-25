import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutinesPage } from './routines.page';

import { RoutinesPageRoutingModule } from './routines-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RoutinesPageRoutingModule
  ],
  declarations: [RoutinesPage]
})
export class RoutinesPageModule {}
