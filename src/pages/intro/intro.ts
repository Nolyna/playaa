import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
//import {Page} from 'ionic-angular';
import { LoginPage }   from '../login/login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})

export class introPage {
  LoginPage = LoginPage;
  constructor(){}
}
