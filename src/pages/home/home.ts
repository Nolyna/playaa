import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask','walk', 'bicycle', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'baseball'];

    this.items = [];
    //for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Baseball',
        note: 'Looking for 3 baseball players to join our team for the Josnn\'s competrtition will train 2 days a week',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'Freesby',
        note: 'Looking for 1o persons to join us at the Hurt park in downtown saturday april 12, at 2pm.',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'Running',
        note: 'Looking for a buddy to train with me 2 days a week',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'basketball',
        note: 'Looking for 3 players to join our team for to play at the student center once a week',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    //}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {
      item: item
    });
  }

}
