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

@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {
  data: any;
  complete: boolean = false;
  isSearch: boolean = false;
  searchItems: any = [];
  is_favorite: boolean = false;
  loader: any;

  constructor(public navCtrl: NavController, public animeProvider: AnimeProvider, public loadingCtrl: LoadingController, private storage: Storage, public modalCtrl: ModalController) {
    this.data = {
      animes: [],
      nextPage: 1,
      err: false,
      errMsg: "",
    };

    let _self = this;

    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });

    this.loader.present();

    storage.get('animes').then((val) => {
      if(val){
        val = JSON.parse(val);
        let weekDiff = new Date(val.update_at + 7 * 24 * 60 * 60 * 1000);

        if(val.update_at > weekDiff){
          this.getAndSaveAnimes();
          return;
        }

        _self.data.animes = val.data;
        _self.complete = true;
        _self.loader.dismiss();
        return;
      }
      this.getAndSaveAnimes();
    });
  }

  getAndSaveAnimes = function(){
    let _self = this;

    this.data.animes = [];
    this.data.nextPage = 1;
    this.data.err = false;
    this.complete = false;
    this.getAnimes(function(res){
      let now = ( new Date().getTime() );
      _self.storage.set('animes', JSON.stringify({update_at: now, data: _self.data.animes}));
      _self.complete = true;
      _self.loader.dismiss();
    });
  };

  getAnimes(callback){

    this.animeProvider.listAll( this.data.nextPage )
      .subscribe( res => {
         if(res.err){ return callback(res); };

      	 res.animes.map((a) => {
      	 	this.data.animes.push(a);
      	 });

      	this.data.nextPage = res.nextPage;

        if( !this.data.nextPage ){
          this.complete = true;
          callback(res);
          return;
        }

        this.getAnimes(callback);

      });
  }

  getSearch(e: any){
    let query = e.target.value || '';
    this.isSearch = (query.length > 0);

    if (query && query.trim() != '') {
      this.searchItems = this.data.animes.filter((item) => {
        return (item.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
      })
    }
  }

  openAnime(slug, title){
    let profileModal = this.modalCtrl.create(AnimeDetailPage, { slug: slug, title: title });
    profileModal.present();
  }

}
