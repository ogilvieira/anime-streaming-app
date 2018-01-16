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
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { AnimeProvider } from '../../providers/anime/anime';
import { Storage } from '@ionic/storage';
import { AnimeDetailPage } from '../../pages/anime-detail/anime-detail';
/**
 * Generated class for the AnimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnimePage = /** @class */ (function () {
    function AnimePage(navCtrl, animeProvider, loadingCtrl, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.animeProvider = animeProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.complete = false;
        this.isSearch = false;
        this.searchItems = [];
        this.is_favorite = false;
        this.getAndSaveAnimes = function () {
            var _self = this;
            this.data.animes = [];
            this.data.nextPage = 1;
            this.data.err = false;
            this.complete = false;
            var loader = this.loadingCtrl.create({
                content: "Carregando...",
            });
            loader.present();
            this.getAnimes(function (res) {
                var now = (new Date().getTime());
                _self.storage.set('animes', JSON.stringify({ update_at: now, data: _self.data.animes }));
                _self.complete = true;
                loader.dismiss();
            });
        };
        this.data = {
            animes: [],
            nextPage: 1,
            err: false,
            errMsg: "",
        };
        var _self = this;
        storage.get('animes').then(function (val) {
            if (val) {
                val = JSON.parse(val);
                var weekDiff = new Date(val.update_at + 7 * 24 * 60 * 60 * 1000);
                if (val.update_at > weekDiff) {
                    _this.getAndSaveAnimes();
                    return;
                }
                _self.data.animes = val.data;
                _self.complete = true;
                return;
            }
            _this.getAndSaveAnimes();
        });
    }
    AnimePage.prototype.getAnimes = function (callback) {
        var _this = this;
        this.animeProvider.listAll(this.data.nextPage)
            .subscribe(function (res) {
            if (res.err) {
                return callback(res);
            }
            ;
            res.animes.map(function (a) {
                _this.data.animes.push(a);
            });
            _this.data.nextPage = res.nextPage;
            if (!_this.data.nextPage) {
                _this.complete = true;
                callback(res);
                return;
            }
            _this.getAnimes(callback);
        });
    };
    AnimePage.prototype.getSearch = function (e) {
        var query = e.target.value || '';
        this.isSearch = (query.length > 0);
        if (query && query.trim() != '') {
            this.searchItems = this.data.animes.filter(function (item) {
                return (item.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        }
    };
    AnimePage.prototype.openAnime = function (slug, title) {
        var profileModal = this.modalCtrl.create(AnimeDetailPage, { slug: slug, title: title });
        profileModal.present();
    };
    AnimePage = __decorate([
        Component({
            selector: 'page-anime',
            templateUrl: 'anime.html',
        }),
        __metadata("design:paramtypes", [NavController, AnimeProvider, LoadingController, Storage, ModalController])
    ], AnimePage);
    return AnimePage;
}());
export { AnimePage };
//# sourceMappingURL=anime.js.map