import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 
@IonicPage()
@Component({
  selector: 'page-getvalue',
  templateUrl: 'getvalue.html',
})
export class GetvaluePage {
  UserName:string;
  phone:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.ready().then(()=>{
      this.storage.get('UserName').then((val)=>{ this.UserName=val;});
      this.storage.get('Phone').then((valPhone)=>{ this.phone=valPhone;});
    });
  }
  
  ionViewWillLeave(){
    this.storage.remove('UserName');
    this.storage.remove('Phone');
    console.log('Removed');
  }  
}
