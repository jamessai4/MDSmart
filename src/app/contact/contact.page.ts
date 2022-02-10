import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private toast: Toast,
    private clipboard: Clipboard,
    private callNumber: CallNumber
  ) {

  }

  ngOnInit() {
  }

  async submit1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ID : LINE',
      message: 'ทางคลินิกยังไม่มี ID LINE จะมีในเร็วๆนี้ !',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('LOG : ยกเลิกการทำงาน');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('LOG : ยืนยันการทำงาน');
          }
        }
      ]
    });

    await alert.present();
  }

  async submit2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'PHONE : NUMBER',
      message: 'สามารถติดต่อได้ทุกวัน 10:00 - 21:00 น. !',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('LOG : ยกเลิกการทำงาน');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('LOG : ยืนยันการทำงาน');
          }
        }
      ]
    });

    await alert.present();
  }

  copy() {
    this.clipboard.copy('0926929955');
    this.toast.show(`คัดลอกไอดีไลน์สำเร็จ`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
        console.log("ซิปท่อมมม");
      }
    )
  }

  phone() {
    this.callNumber.callNumber("0957698594", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
