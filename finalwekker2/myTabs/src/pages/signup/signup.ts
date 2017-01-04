import { Component,Injectable } from '@angular/core';
import {Provider} from '../../providers/provider';
import { AlertController } from 'ionic-angular';
import {Http} from '@angular/http'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
username:any;
password:any;
type:any;
side:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public http:Http,public provider:Provider) {
this.username="";
this.password="";
this.type="";
this.side="";
  }
  login()
  {
this.navCtrl.pop();
  }
  signup()
  {
    let link = 'https://wekker.000webhostapp.com/everything/public/InsertUserInfo';
  let data = {"username": this.username,"token":this.password,"bedtype":this.type,"bedside":this.side};
      this.http.post(link, data)
      .subscribe(data1 => {
        let alert = this.alertCtrl.create({
    title: 'Alert!',
    subTitle: 'Your account is Sucessfully created',
    buttons: ['OK']
  });
  alert.present();
  this.navCtrl.pop();
      }, error => {
        let alert = this.alertCtrl.create({
    title: 'Alert!',
    subTitle: 'This username already exist!',
    buttons: ['OK']
  });
  alert.present();
        console.log("error");
      });
  }
}
