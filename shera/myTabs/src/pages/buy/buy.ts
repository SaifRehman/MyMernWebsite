import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'buy.html'
})
export class BuyPage {
public show:any;
price:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController,public alertCtrl: AlertController) {
this.show=0;
this.price=0;
      this.viewCtrl.showBackButton(false);
  }
  cancel()
  {
    this.viewCtrl.dismiss();
  }
  do()
  {
    this.show=this.price*1233;
  }
  buynow()
  {
    let confirm = this.alertCtrl.create({
  title: 'Message Confirmation',
  message: 'Would you like to buy this stock?',
  buttons: [
    {
      text: 'Disagree',
      handler: () => {
        console.log('Disagree clicked');
      }
    },
    {
      text: 'Agree',
      handler: () => {
        console.log('Agree clicked');
        this.navCtrl.push(ContactPage);
      }
    }
  ]
});
confirm.present();
  }
}
