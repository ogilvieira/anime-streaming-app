import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
    apiPath: string = 'https://ogv-anime-api.herokuapp.com/';
    apiPathCategory: string = this.apiPath+'category';
    apiPathEpisodes: string = this.apiPath+'episodes';
    apiPathAnime: string = this.apiPath+'anime';
}