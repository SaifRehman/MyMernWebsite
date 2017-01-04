import { Component } from '@angular/core';
import { LoginPage } from '../login/login';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html'
})
export class StarterPage {

  constructor(public navCtrl: NavController) {

  }
  starter()
  {
this.navCtrl.push(LoginPage);
//saif i dont want the back button ok
  }


}
