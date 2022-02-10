import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UidPageRoutingModule } from './uid-routing.module';

import { UidPage } from './uid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UidPageRoutingModule
  ],
  declarations: [UidPage]
})
export class UidPageModule {}
