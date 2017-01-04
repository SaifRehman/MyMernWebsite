import { Component,Injectable } from '@angular/core';
import {Provider} from '../../providers/provider';

import { NavController } from 'ionic-angular';
import {Inject} from '@angular/core';
@Injectable()

@Component({
  selector: 'page-availablealarms',
  templateUrl: 'availablealarms.html'
})
export class AvailableAlarmsPage {
public showcontent:any;
  constructor(public navCtrl: NavController,public provider:Provider) {
    this.showcontent=false;
  }
show()
{
  this.showcontent=!this.showcontent;
}
rem()
{
  this.provider.alarmtone = "";
  this.provider.vibrationlevel = "";
  this.provider.pattern = "";
  this.provider.wakeupmode = "";
  this.provider.daysofweek = "";
  this.provider.duration = "";
}
}
