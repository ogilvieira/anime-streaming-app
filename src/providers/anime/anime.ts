import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../../app-settings';
import 'rxjs/add/operator/map';

/*
  Generated class for the AnimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimeProvider {

  constructor(public http: Http, public appSettings: AppSettings) {
  }

  listAll(page = 1) {
    return this.http.get(this.appSettings.apiPathAnime+"/"+page).map(res => res.json());
  }

  get(slug = "") {
    return this.http.get(this.appSettings.apiPathAnime+"/detail/"+slug).map(res => res.json());
  }

  getByAnime(slug = "", page = 1){
    return this.http.get(this.appSettings.apiPathAnime+"/episodes/"+slug+"/"+page).map(res => res.json());
  }

}
