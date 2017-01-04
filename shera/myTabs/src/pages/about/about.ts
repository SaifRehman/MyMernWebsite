import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public platform:Platform) {


  }

}
