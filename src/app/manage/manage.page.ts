import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor(private firestore: AngularFirestore,private authser: AuthService) {
    this.itemCollection = firestore.collection<any>('users');
    // this.c = this.itemCollection.valueChanges();
  }

  itemCollection: AngularFirestoreCollection<any>;
  items: any[];
  // c: any;

  ngOnInit() {
    this.itemCollection.valueChanges().subscribe((data: any[]) => {
      this.items = data.filter((x)=>x.role !== "kratom" )
      console.log(this.items)
    })
  }

  SearchValue : string;
  tempvalue = [];

  search(event){
    this.tempvalue = this.items.filter(text => text.name.includes(this.SearchValue))
  }


}
