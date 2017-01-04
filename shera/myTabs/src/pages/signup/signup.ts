import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController} from 'ionic-angular';
import {Http} from '@angular/http'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  username:any;
  token:any;
  bedtype:any;
  bedside:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController,public http:Http,public alertCtrl: AlertController) {
    this.username="";
    this.token="";
    this.bedside="";
    this.bedtype="";
  }
  cancel()
  {
    this.viewCtrl.dismiss();
  }
  signup()
  {
    let link = 'https://wekkerapi-noncultured-carpophore.run.aws-usw02-pr.ice.predix.io/PostUserInfo';
var dataa = {"username":this.username,"bedtype":this.bedtype,"bedside":this.bedside,"token":this.token};
    this.http.post(link, dataa)
    .subscribe(dataa => {
      let alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'You Have sucessfully signed up with token '+ this.token ,
            buttons: ['OK']
          });
          alert.present();
      this.viewCtrl.dismiss();
      console.log(dataa);
    }, error => {
      console.log("NO success");
      this.viewCtrl.dismiss();
    });
  }
}
