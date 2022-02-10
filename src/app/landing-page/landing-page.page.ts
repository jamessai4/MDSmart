import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(
    private authser: AuthService,
    private firestore: AngularFirestore
  ) {
    this.itemCollection = firestore.doc<any>('users/'+ authser.user.uid);
    this.items = this.itemCollection.valueChanges();
  }

  itemCollection: AngularFirestoreDocument<any>;
  items: any;

  db_role:string;
  db_id: string;

  ngOnInit() {
    this.items.subscribe((data: any) => {
      this.db_role = data.role;
      this.db_id = data.uid;
      console.log(this.db_role)
    })
    this.email = this.authser.user.email
    console.log(this.items)
    
  }
  email: string;


  logout() {
    this.authser.logout()
  }

}

