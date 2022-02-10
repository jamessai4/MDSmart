import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-uid',
  templateUrl: './uid.page.html',
  styleUrls: ['./uid.page.scss'],
})
export class UidPage implements OnInit {

  itemCollection: AngularFirestoreDocument<any>;
  items: any;
  id: string;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private nav: NavController
  ) {
    this.id = this.route.snapshot.paramMap.get('uid')
    console.log(this.id)
    this.itemCollection = firestore.doc<any>('users/' + this.id);
    this.items = this.itemCollection.valueChanges();
  }
  db_date: string;
  db_name: string;
  db_id: string;
  db_symptom:string;
  db_tell:string;

  ngOnInit() {
    this.items.subscribe((data: any) => {
      this.db_date = data.date;
      this.db_tell= data.tell;
      this.db_name = data.name;
      this.db_id = data.uid;
      this.db_symptom = data.symptom;
      console.log(this.id)
    })
  }

  edit(){
    const item = {
      date: this.db_date,
      symptom:this.db_symptom
    }
    this.itemCollection.update(item).then((res)=>{
      this.nav.navigateRoot('manage')
      console.log('done')
    })
  }

  cancel(){
    console.log("test btn canael")
    this.db_symptom = "";  
    this.db_date = "";
  }
}
