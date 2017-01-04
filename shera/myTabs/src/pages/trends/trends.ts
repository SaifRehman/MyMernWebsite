import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController} from 'ionic-angular';
import {Http} from '@angular/http'
import { AlertController } from 'ionic-angular';
import { Ng2Highcharts } from 'ng2-highcharts';
import { BuyPage } from '../buy/buy';

@Component({
  templateUrl: 'trends.html'
})
export class TrendsPage {
  public chartData = {
  chart: {
    type: 'line'
  },
  xAxis: {
    categories: [1, 2, 3, 4, 5, 6, 7,8.9,10,11,12,13,14,15,16,17]
  },
  title:{
    text:"Graph"
  },
  subtitle:{
    text:"0% change"
  },
  series: [
    {
      showInLegend:false,
      name: 'Graph',
      data: [25, 25, 23, 25, 23, 24, 26, 25, 23, 24, 11,12, 13, 14, 15, 16, 17]
    }
  ]
};

public chartData1 = {
chart: {
  type: 'line'
},
title:{text:'PFC<br>1233'},
subtitle:{text:'0% change'},
xAxis: {
  categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri']
},
series: [
  {
    showInLegend:false,
    name: 'Weekly',
    data: [1221, 1220, 1110, 1194, 1233]
  }
]
};
public chartData2 = {
chart: {
  type: 'line'
},
title:{text:'PFC<br>1233'},
subtitle:{text:'-0.57% change'},
xAxis: {
  categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
},
series: [
  {
    showInLegend:false,
    name: 'Monthly',
    data: [1126, 1154, 1076, 1112, 1178,1166,1206,1244,1240,1261,1220,1218,1453,1404,1393,1416,1376,1357,1371,1347,1195,1157,1258,1227,1220,1110,1194,1233,1230,1229,1240]
  }
]
};
  settings: string = "daily";
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController,public http:Http,public alertCtrl: AlertController) {

  }
  cancel()
  {
    this.viewCtrl.dismiss();
  }
  buy()
  {
    let profileModal = this.modalCtrl.create(BuyPage);
    profileModal.present();
  }
}
