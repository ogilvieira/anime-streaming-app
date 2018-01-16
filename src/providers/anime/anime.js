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
  Generated class for the AnimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AnimeProvider = /** @class */ (function () {
    function AnimeProvider(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
    }
    AnimeProvider.prototype.listAll = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.appSettings.apiPathAnime + "/" + page).map(function (res) { return res.json(); });
    };
    AnimeProvider.prototype.get = function (slug) {
        if (slug === void 0) { slug = ""; }
        return this.http.get(this.appSettings.apiPathAnime + "/detail/" + slug).map(function (res) { return res.json(); });
    };
    AnimeProvider.prototype.getByAnime = function (slug, page) {
        if (slug === void 0) { slug = ""; }
        if (page === void 0) { page = 1; }
        return this.http.get(this.appSettings.apiPathAnime + "/episodes/" + slug + "/" + page).map(function (res) { return res.json(); });
    };
    AnimeProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, AppSettings])
    ], AnimeProvider);
    return AnimeProvider;
}());
export { AnimeProvider };
//# sourceMappingURL=anime.js.map