import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TrendsPage } from '../trends/trends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }
  pfc()
  {
    let profileModal = this.modalCtrl.create(TrendsPage);
    profileModal.present();
  }
  hik()
  {
    let profileModal = this.modalCtrl.create(TrendsPage);
    profileModal.present();
  }
  bp()
  {
    let profileModal = this.modalCtrl.create(TrendsPage);
    profileModal.present();
  }
}
