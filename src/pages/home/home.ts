import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EpisodesProvider } from '../../providers/episodes/episodes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data: any;

  constructor(public navCtrl: NavController, public episodesProvider: EpisodesProvider, public loadingCtrl: LoadingController) {
    let _self = this;
    this.data = {
      episodes: []
    };

    this.loader.present();

    this.episodesProvider.listAll()
      .subscribe( res => {
        _self.data = res;
        console.log(_self.data);
        this.loader.dismiss();
      })
  }

  loader = this.loadingCtrl.create({
    content: "Carregando...",
  });

}
