import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AnimeProvider } from '../../providers/anime/anime';

/**
 * Generated class for the AnimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {
  data: any;

  constructor(public navCtrl: NavController, public animeProvider: AnimeProvider, public loadingCtrl: LoadingController) {
    this.data = {
      animes: [],
      nextPage: 4,
    };

    this.loader.present();
    var _self = this;

    this.getAnimes(function(){
    	_self.loader.dismiss();
    });
  }

  loader = this.loadingCtrl.create({
    content: "Carregando...",
  });

  getAnimes(callback){

    this.animeProvider.listAll( this.data.nextPage )
      .subscribe( res => {
      	
      	 res.animes.map((a) => {
      	 	this.data.animes.push(a);
      	 });

      	this.data.nextPage = res.nextPage;
      	callback();
      });
  }

  doInfinite(e){
  	if(!this.data.nextPage){ 
  		e.complete();
  		return;
  	}
  	this.getAnimes(function(){
  		e.complete();
  	})
  }

}
