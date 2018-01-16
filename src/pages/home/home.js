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
import { Storage } from '@ionic/storage';
import { AnimeDetailPage } from '../../pages/anime-detail/anime-detail';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this.loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        this.loader.present();
        var _self = this;
        storage.get('favorites').then(function (val) {
            console.log(val);
            if (val) {
                val = JSON.parse(val);
                console.log(val.length);
                var i_1 = 0;
                var getAnime_1 = function () {
                    var e = val.pop();
                    console.log(e);
                    _self.storage.get(e).then(function (v) {
                        if (v) {
                            _self.data.push(JSON.parse(v));
                        }
                        if (val.length > 0) {
                            i_1++;
                            getAnime_1();
                        }
                        else {
                            console.log(_self.data);
                            _self.loader.dismiss();
                            return;
                        }
                    });
                };
                getAnime_1();
            }
            else {
                _self.storage.set('favorites', JSON.stringify([])).then(function (val) {
                    _self.loader.dismiss();
                });
            }
        });
    }
    HomePage.prototype.openAnime = function (slug, title) {
        if (title === void 0) { title = "d"; }
        console.log(slug);
        var profileModal = this.modalCtrl.create(AnimeDetailPage, { slug: slug, title: title });
        profileModal.present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, LoadingController, Storage, ModalController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map