import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { LoginPage }   from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
//import { SignupPage }  from '../pages/signup/signup';
import { oncampusPage }  from '../pages/oncampus/oncampus';
import { HomePage }  from '../pages/home/home';
//import { SearchPage }  from '../pages/search/search';
import { introPage }  from '../pages/intro/intro';
import { teamPage }  from '../pages/team/team';
//import { teamdetailsPage }  from '../pages/teamdetails/teamdetails';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = LoginPage;
  rootPage: any = introPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Login', component: LoginPage },
      //{ title: 'Sign Up', component: SignupPage },
      { title: 'My Profile', component: ProfilePage },
      { title: 'Dashboard', component:HomePage },
      { title: 'My Team', component: teamPage },
      { title: 'On campus', component: oncampusPage },
      //{ title: 'My Search', component: SearchPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
