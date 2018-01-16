var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EpisodesProvider } from '../../providers/episodes/episodes';
var NewEpisodesPage = /** @class */ (function () {
    function NewEpisodesPage(navCtrl, episodesProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.episodesProvider = episodesProvider;
        this.loadingCtrl = loadingCtrl;
        this.nextPage = 1;
        this.loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        this.data = {
            episodes: []
        };
        this.loader.present();
        var _self = this;
        this.getEpisodes(function (res) {
            _self.loader.dismiss();
            res.episodes.map(function (a) {
                _self.data.episodes.push(a);
            });
            _self.nextPage = res.nextPage;
            console.log(_self.nextPage);
        });
    }
    NewEpisodesPage.prototype.getEpisodes = function (callback) {
        this.episodesProvider.listAll()
            .subscribe(function (res) {
            callback(res);
        });
    };
    ;
    NewEpisodesPage.prototype.doRefresh = function (e) {
        var _self = this;
        this.getEpisodes(function (res) {
            e.complete();
            _self.data.episodes = res.episodes;
            _self.nextPage = 2;
        });
    };
    NewEpisodesPage = __decorate([
        Component({
            selector: 'page-newepisodes',
            templateUrl: 'newepisodes.html'
        }),
        __metadata("design:paramtypes", [NavController, EpisodesProvider, LoadingController])
    ], NewEpisodesPage);
    return NewEpisodesPage;
}());
export { NewEpisodesPage };
//# sourceMappingURL=newepisodes.js.map