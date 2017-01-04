import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http'
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:any;
  password:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public http:Http,public loadingCtrl: LoadingController) {
    this.username="";
    this.password="";

  }
  swipeRight(e) {
    console.log("next page");
    let profileModal = this.modalCtrl.create(SignupPage);
    profileModal.present();
  }
  signin()
  {
    this.navCtrl.push(TabsPage);
    /* let loading = this.loadingCtrl.create({
        content: 'Authenticating ..'
        });
    loading.present();
    let link2 = 'http://192.168.43.94/fintech/signIn.php';
    var dataa2 = {"email": this.username,"password": this.password};
    this.http.post(link2, dataa2)
    .subscribe(dataa => {
      var temp = dataa["_body"];
      if(temp == "1")
      this.navCtrl.push(TabsPage);
      loading.dismiss();
    }, error => {
    loading.present();
    });
    */
}
}
