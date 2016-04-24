import {Page, NavController} from 'ionic-angular';
import {NetrunnerDb} from '../../providers/netrunnerdb/netrunnerdb';

@Page({
  templateUrl: 'build/pages/sets/sets.html',
  providers: [NetrunnerDb]
})
export class SetsPage {
  public foundSets;

  constructor(private nav: NavController,
              private netrunnerdb: NetrunnerDb) {
    this.getSets();
  }

  getSets() {
    this.netrunnerdb.getSets().subscribe(
      data => {
        this.foundSets = data.json();
      },
      err => console.log(err),
      () => console.log('getSets completed')
    );
  }

  

}
