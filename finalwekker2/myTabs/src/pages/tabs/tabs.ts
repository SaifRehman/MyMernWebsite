import { Component } from '@angular/core';

import { AvailableAlarmsPage } from '../availablealarms/availablealarms';
import { SetupalamPage } from '../setalarm/setalarm';
import { MoreInfoPage } from '../moreinfo/moreinfo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AvailableAlarmsPage;
  tab2Root: any = SetupalamPage;
  tab3Root: any = MoreInfoPage;

  constructor() {

  }
}
