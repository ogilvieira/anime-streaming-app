import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  data: any;

  constructor(public navCtrl: NavController, public categoryProvider: CategoryProvider, public loadingCtrl: LoadingController) {
    this.data = {
      categories: []
    };

    this.loader.present();

    this.categoryProvider.listAll()
      .subscribe( res => {
        this.data.categories = res;
        this.loader.dismiss();
      });
  }

  loader = this.loadingCtrl.create({
    content: "Carregando...",
  });
}
