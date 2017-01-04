import { Component,Injectable } from '@angular/core';
import {Provider} from '../../providers/provider';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';
import {Http} from '@angular/http'
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
@Injectable()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
username:any;
password:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public loadingCtrl: LoadingController,public http:Http,public provider:Provider) {
this.username="";
this.password="";
  }
  login()
  {

    let link = 'https://wekker.000webhostapp.com/everything/public/CheckLogin';
  let data = {"username": this.username,"token":this.password};
      this.http.post(link, data)
      .subscribe(data1 => {
        var temp ;
      temp= JSON.parse(data1["_body"]);
      temp  = temp["result"];
      if(temp.length)
      {
        this.provider.username = temp[0].username;
        this.provider.token = temp[0].token;
        this.provider.type = temp[0].bedtype;
        this.provider.side = temp[0].bedside;
        console.log(this.provider.username);
        console.log(this.provider.token);
        console.log(this.provider.type);
        console.log(this.provider.side);
        let link1 = 'https://wekker.000webhostapp.com/everything/public/GetAllInfoForAppAlarm'+'/'+this.provider.username+'/'+this.provider.token;
      let data2 = {};
          this.http.get(link1, data2)
          .subscribe(data1 => {
            this.provider.temp= JSON.parse(data1["_body"]);
            this.provider.temp  = this.provider.temp["result"];
            console.log("sucess2");
            console.log(this.provider.temp);
            this.navCtrl.push(TabsPage);
          }, error => {
            console.log("error");
          });
      }
      else {
        let alert = this.alertCtrl.create({
           title: 'Alert!',
           subTitle: 'Wrong credentials',
           buttons: ['OK']
         });
         alert.present();
      }
      }, error => {
        console.log("error");
      });
  /*if(this.username=="rkq1994" && this.password =="A1B2C3D4E5F6")
this.navCtrl.push(TabsPage);
else
{
  let alert = this.alertCtrl.create({
     title: 'Alert!',
     subTitle: 'Wrong credentials',
     buttons: ['OK']
   });
   alert.present();
} */
  }
  signup()
  {
    this.navCtrl.push(SignupPage);
  }

}
