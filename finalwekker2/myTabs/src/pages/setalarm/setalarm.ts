import { Component,Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http'
import { LocalNotifications } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import {Provider} from '../../providers/provider';
@Injectable()

@Component({
  selector: 'page-setupalarm',
  templateUrl: 'setalarm.html'
})
export class SetupalamPage {
  public temp:any;
  time:any;
  tone:any;
  light:any;
  wind:any;
  vibration:any;
  alarmtone:any;
  vibrationlevel:any;
  pattern:any;
  durationseq:any;
  durationmul:any;
  sat:any;
  sun:any;
  mon:any;
  tue:any;
  wed:any;
  thu:any;
  fri:any;
  timeStarts:any; // hey brb

// Catch the Success & Error Output
// Platform Quirks
// iOS calls success on completion of playback only
// Android calls success on completion of playback AND on release() duration?? yes its the value of the sliders where
//if we are going to use seq then it is durationseq else if we r going to use mul then it is durationmul okk


// play the file
public audio:any;

  constructor(public navCtrl: NavController,public alerCtrl: AlertController,public provider:Provider,public http:Http) {
     this.audio = new Audio();
     this.light = false;
     this.wind = false;
     this.vibration=false;
     this.alarmtone="";
     this.vibrationlevel="";
     this.pattern="";
     this.durationseq="";
     this.durationmul="";
     this.sat=false;
     this.sun=false;
     this.mon=false;
     this.tue=false;
     this.wed=false;
     this.thu=false;
     this.fri=false;
     this.timeStarts="";
     this.time="";
     LocalNotifications.on("click", (notification, state) => {
   alert(new Date(new Date().getTime()));
   });
   }
stop()
{
  this.audio.pause();
}
  onChange(val)
  {

    this.audio.pause();
    this.audio.src = "assets/icon/"+val+".mp3";
    this.audio.load();
    this.audio.play();
 }
set()
{
  var a = "tone";
  var days = "";
  if(this.light)
  {
    a = a+"light,";
  }
  if(this.wind)
  {
    a = a+"wind,";
  }
  if(this.vibration)
  {
    a = a+"vibration,";
  }
  if(this.sat)
  {
    days = days + "sat,";
  }
  if(this.sun)
  {
    days = days + "sun,";
  }
  if(this.mon)
  {
    days = days + "mon,";
  }
  if(this.tue)
  {
    days = days + "tue,";
  }
  if(this.wed)
  {
    days = days + "wed,";
  }
  if(this.thu)
  {
    days = days + "thu,";
  }
  if(this.fri)
  {
    days = days + "fri,";
  }
  var no="0";
  if(this.pattern == "sequential")
  no = "5";
  //make this 5
  else {
    no = "1";
  }
  this.provider.alarmtone = this.tone;
  this.provider.vibrationlevel = this.vibrationlevel;
  this.provider.pattern = this.pattern;
  this.provider.wakeupmode = a;
  this.provider.daysofweek = days;
  this.provider.duration = no ;

  let link = 'https://wekker.000webhostapp.com/everything/public/CreateAlarm';
let data = {"wakeuptime": this.time,"wakeupmode":this.provider.wakeupmode,"tonename":this.provider.alarmtone,"vibrationlevel":this.provider.vibrationlevel,"pattern":this.provider.pattern,"duration":this.provider.duration,"daysofweek":this.provider.daysofweek,"alarmstatus":"true","username":this.provider.username,"token":this.provider.token,"lighttime":"09:30","windtime":"09:32","vibrationtime":"09:34","bedtype":this.provider.type,"bedside":this.provider.side};
    this.http.post(link, data)
    .subscribe(data1 => {
      console.log("sucess");


      let link1 = 'https://wekker.000webhostapp.com/everything/public/GetAllInfoForAppAlarm'+'/'+this.provider.username+'/'+this.provider.token;
    let data2 = {};
        this.http.get(link1, data2)
        .subscribe(data1 => {
          this.provider.temp= JSON.parse(data1["_body"]);
          this.provider.temp  = this.provider.temp["result"];
          console.log("sucess2");
          console.log(this.temp);

        }, error => {
          console.log("error");
        });




    }, error => {
      console.log("error");
    });

}

}
