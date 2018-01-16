var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../../app-settings';
import 'rxjs/add/operator/map';
/*
  Generated class for the EpisodesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EpisodesProvider = /** @class */ (function () {
    function EpisodesProvider(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.data = null;
    }
    EpisodesProvider.prototype.listAll = function () {
        return this.http.get(this.appSettings.apiPathEpisodes).map(function (res) { return res.json(); });
    };
    EpisodesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, AppSettings])
    ], EpisodesProvider);
    return EpisodesProvider;
}());
export { EpisodesProvider };
//# sourceMappingURL=episodes.js.map