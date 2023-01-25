import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaticsPage } from './statics.page';

import { StaticsPageRoutingModule } from './statics-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StaticsPageRoutingModule
  ],
  declarations: [StaticsPage]
})
export class StaticsPageModule {}
