import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    public auth: AngularFireAuth, private navCtrl: NavController,
    public alertController: AlertController
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.navCtrl.navigateRoot('/landing-page')
        })
  }


  // async login() {

  //   if (this.email || this.password == "") {
  //     const alert = await this.alertController.create({
  //       cssClass: 'my-custom-class',
  //       header: 'เเจ้งเตือน',
  //       message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
  //       buttons: ['ตกลง']
  //     });
  //     await alert.present();
  //     const { role } = await alert.onDidDismiss();
  //     console.log('onDidDismiss resolved with role', role);
  //   } else {
  //     this.auth.signInWithEmailAndPassword(this.email, this.password)
  //       .then(res => {
  //         this.navCtrl.navigateRoot('/landing-page')
  //       })
  //   }

  // }

  // login() {
  //   this.auth.signInWithEmailAndPassword(this.email, this.password)
  //     .then(res => {
  //       this.navCtrl.navigateRoot('/landing-page')
  //     })
  // }

  type = true;
  iconname = 'eye';

  functionshowpass() {
    this.type = !this.type;

    if (this.iconname == 'eye') {
      this.iconname = 'eye-off-outline'
    } else
      this.iconname = 'eye'

    console.log(this.type)
  }

  // gmail(){
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
}
