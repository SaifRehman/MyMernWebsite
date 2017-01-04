import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SetupalamPage } from '../pages/setalarm/setalarm';
import { MoreInfoPage } from '../pages/moreinfo/moreinfo';
import { AvailableAlarmsPage } from '../pages/availablealarms/availablealarms';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StarterPage } from '../pages/starter/starter';
import { TabsPage } from '../pages/tabs/tabs';
import {Provider} from '../providers/provider';

@NgModule({
  declarations: [
    MyApp,
    SetupalamPage,
    MoreInfoPage,
    AvailableAlarmsPage,
    LoginPage,
    SignupPage,
    StarterPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SetupalamPage,
    MoreInfoPage,
    AvailableAlarmsPage,
    LoginPage,
    SignupPage,
    StarterPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Provider]
})

export class AppModule {}
