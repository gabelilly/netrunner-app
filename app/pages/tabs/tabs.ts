import {Page, NavController} from 'ionic-angular';
import {SetsPage} from '../sets/sets';
import {TodaysDecksPage} from '../todays-decks/todays-decks';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = SetsPage;
  tab3Root = TodaysDecksPage;

  constructor() {}
}
