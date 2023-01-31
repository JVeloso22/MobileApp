import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedroomPageRoutingModule } from './bedroom-routing.module';

import { BedroomPage } from './bedroom.page';
import { BlindsComponent } from './devices/blinds/blinds.component';
import { FansComponent } from './devices/fans/fans.component';
import { LightsComponent } from './devices/lights/lights.component';
import { TempComponent } from './devices/temp/temp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedroomPageRoutingModule
  ],
  declarations: [BedroomPage, BlindsComponent, FansComponent, LightsComponent, TempComponent]
})
export class BedroomPageModule {}
