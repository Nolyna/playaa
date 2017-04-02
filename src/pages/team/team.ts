import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { teamdetailsPage }  from '../teamdetails/teamdetails';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class teamPage {

  constructor(public navCtrl: NavController) {

  }

  goToDetails() {
    this.navCtrl.push(teamdetailsPage);
  }

}
