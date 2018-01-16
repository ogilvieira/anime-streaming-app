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
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AnimeProvider } from '../../providers/anime/anime';
/**
 * Generated class for the AnimeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnimeDetailPage = /** @class */ (function () {
    function AnimeDetailPage(navCtrl, navParams, viewCtrl, animeProvider, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.animeProvider = animeProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.titleHeader = '';
        this.slug = '';
        this.loaded = false;
        this.isSetFavorite = false;
        this.episodes = [];
        this.episodesLoaded = false;
        this.is_favorite = false;
        this.episodesNextPage = 1;
        this.titleHeader = this.navParams.get('title');
        this.slug = this.navParams.get('slug');
        storage.get('anime_' + this.slug).then(function (val) {
            if (val) {
                _this.is_favorite = true;
            }
            else {
                _this.is_favorite = false;
            }
        });
        this.animeProvider.get(this.slug)
            .subscribe(function (res) {
            console.log(res);
            _this.data = res.data;
            _this.data.title = _this.titleHeader;
            _this.data.slug = _this.slug;
            _this.loaded = true;
            _this.animeProvider.getByAnime(_this.slug, 1)
                .subscribe(function (res) {
                console.log(res);
                _this.episodes = res.episodes;
                _this.episodesLoaded = true;
                _this.episodesNextPage = res.nextPage;
            });
        });
    }
    AnimeDetailPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('title'));
    };
    AnimeDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AnimeDetailPage.prototype.toggleFavorite = function () {
        if (this.isSetFavorite) {
            return;
        }
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        this.isSetFavorite = true;
        loader.present();
        var _self = this;
        this.storage.get('anime_' + this.slug).then(function (val) {
            if (val) {
                _self.is_favorite = false;
                _self.storage.remove('anime_' + _self.slug);
                _self.storage.get('favorites').then(function (val) {
                    console.log(JSON.parse(val));
                    loader.dismiss();
                    _self.isSetFavorite = false;
                });
                return;
            }
            var now = (new Date().getTime());
            _self.storage.set('anime_' + _self.slug, JSON.stringify({ update_at: now, data: _self.data }));
            _self.storage.get('favorites').then(function (val) {
                val = JSON.parse(val);
                console.log(val);
                val.push('anime_' + _self.slug);
                console.log(val);
                _self.storage.set('favorites', JSON.stringify(val));
                _self.is_favorite = true;
                loader.dismiss();
                _self.isSetFavorite = false;
            });
        });
    };
    ;
    AnimeDetailPage.prototype.doInfinite = function (e) {
        var _self = this;
        if (!this.episodesLoaded || !this.episodesNextPage) {
            e.complete();
            return;
        }
        this.animeProvider.getByAnime(this.slug, this.episodesNextPage)
            .subscribe(function (res) {
            if (res.episodes.length) {
                res.episodes.map(function (a) {
                    _self.episodes.push(a);
                });
                _self.episodesNextPage = res.nextPage;
            }
            ;
            e.complete();
        });
    };
    AnimeDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-anime-detail',
            templateUrl: 'anime-detail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, AnimeProvider, LoadingController, Storage])
    ], AnimeDetailPage);
    return AnimeDetailPage;
}());
export { AnimeDetailPage };
//# sourceMappingURL=anime-detail.js.map