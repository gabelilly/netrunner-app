import {App, Platform, Tab, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {SetsPage} from './pages/sets/sets';
import {TodaysDecksPage} from './pages/todays-decks/todays-decks';

@App({
  template: `
    <ion-tabs>
      <ion-tab [root]="tab1Root" tabTitle="Home"></ion-tab>
      <ion-tab [root]="tab2Root" tabTitle="Sets"></ion-tab>
      <ion-tab [root]="tab3Root" tabTitle="Decks"></ion-tab>
    </ion-tabs>`,
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  tab1Root;
  tab2Root;
  tab3Root;

  constructor(platform: Platform) {
    this.tab1Root = HomePage;
    this.tab2Root = SetsPage;
    this.tab3Root = TodaysDecksPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
