import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Netrunnerdb provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NetrunnerDb {
  data: any = null;

  constructor(private http: Http) {}

  getSets() {
    let sets = this.http.get(`https://netrunnerdb.com/api/sets/`);
    return sets;
  }

  getSetDetails(set) {
    let setDetails = this.http.get(`https://netrunnerdb.com/api/set/${set}`);
    return setDetails;
  }

}