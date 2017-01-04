
import {Injectable} from '@angular/core';
@Injectable()

export class Provider {
public wakeupmode:any;
public alarmtone:any;
public vibrationlevel:any;
  public pattern:any;
  public duration:any;
  public daysofweek:any;
  public username;
  public token;
  public type;
  public side;
  public temp;

  constructor() {
this.wakeupmode = "";
this.alarmtone = "";
this.vibrationlevel = "";
this.pattern = "";
this.duration = "";
this.daysofweek = "";
this.temp=[];
this.username="";
this.token="";
this.type="";
this.side="";
  }


}
