import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../../app-settings';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class CategoryProvider {

  constructor(public http: Http, public appSettings: AppSettings) {
  }

  listAll() {
    return this.http.get(this.appSettings.apiPathCategory).map(res => res.json());
  }

}
