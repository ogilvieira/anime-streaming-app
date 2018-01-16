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
import { CategoryProvider } from '../../providers/category/category';
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, categoryProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.categoryProvider = categoryProvider;
        this.loadingCtrl = loadingCtrl;
        this.loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        this.data = {
            categories: []
        };
        this.loader.present();
        this.categoryProvider.listAll()
            .subscribe(function (res) {
            _this.data.categories = res;
            _this.loader.dismiss();
        });
    }
    CategoryPage = __decorate([
        Component({
            selector: 'page-category',
            templateUrl: 'category.html'
        }),
        __metadata("design:paramtypes", [NavController, CategoryProvider, LoadingController])
    ], CategoryPage);
    return CategoryPage;
}());
export { CategoryPage };
//# sourceMappingURL=category.js.map