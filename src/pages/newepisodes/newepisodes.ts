import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EpisodesProvider } from '../../providers/episodes/episodes';

@Component({
  selector: 'page-newepisodes',
  templateUrl: 'newepisodes.html'
})
export class NewEpisodesPage {
	data: any;
  nextPage: number = 1;


  constructor(public navCtrl: NavController, public episodesProvider: EpisodesProvider, public loadingCtrl: LoadingController) {
    this.data = {
      episodes: []
    };

    this.loader.present();
    
    let _self = this;

    this.getEpisodes(function(res){
      _self.loader.dismiss();
      res.episodes.map((a) => {
        _self.data.episodes.push(a);
      })
      _self.nextPage = res.nextPage;
      console.log(_self.nextPage);
    });
  }

  getEpisodes(callback){
    this.episodesProvider.listAll()
      .subscribe( res => {
        callback(res);
      });
  };

  loader = this.loadingCtrl.create({
    content: "Carregando...",
  });

  doRefresh(e){
    let _self = this;

    this.getEpisodes(function(res){
      e.complete();
      _self.data.episodes = res.episodes;
      _self.nextPage = 2;
    });
  }



}
