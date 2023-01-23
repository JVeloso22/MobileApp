import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RommsPageRoutingModule } from './romms-routing.module';

import { RommsPage } from './romms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RommsPageRoutingModule
  ],
  declarations: [RommsPage]
})
export class RommsPageModule {}
