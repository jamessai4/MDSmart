import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage],
  providers: [
    Clipboard,
    Toast,
    CallNumber,
  ]
})
export class ContactPageModule { }
