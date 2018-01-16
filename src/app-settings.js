var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        // apiPath: string = 'http://localhost:3000/';
        this.apiPath = 'https://ogv-anime-api.herokuapp.com/category';
        this.apiPathCategory = this.apiPath + 'category';
        this.apiPathEpisodes = this.apiPath + 'episodes';
        this.apiPathAnime = this.apiPath + 'anime';
    }
    AppSettings = __decorate([
        Injectable()
    ], AppSettings);
    return AppSettings;
}());
export { AppSettings };
//# sourceMappingURL=app-settings.js.map