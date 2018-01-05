import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../../app-settings';
import 'rxjs/add/operator/map';

/*
  Generated class for the EpisodesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EpisodesProvider {
  data: any;

  constructor(private http: Http, private appSettings: AppSettings) {
    this.data = null;
  }

  listAll() {
	return this.http.get(this.appSettings.apiPathEpisodes).map(res => res.json());
  }
}
