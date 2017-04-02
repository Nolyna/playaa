import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage }   from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage }  from '../pages/signup/signup';
import { oncampusPage }  from '../pages/oncampus/oncampus';
import { HomePage }  from '../pages/home/home';
import { SearchPage }  from '../pages/search/search';
import { introPage }  from '../pages/intro/intro';
import { teamPage }  from '../pages/team/team';
import { teamdetailsPage }  from '../pages/teamdetails/teamdetails';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    SignupPage,
    oncampusPage,
    HomePage,
    SearchPage,
    introPage,
    teamPage,
    teamdetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilePage,
    SignupPage,
    oncampusPage,
    HomePage,
    teamdetailsPage,
    SearchPage,
    introPage,
    teamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
