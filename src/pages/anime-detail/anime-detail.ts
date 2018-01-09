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

@IonicPage()
@Component({
  selector: 'page-anime-detail',
  templateUrl: 'anime-detail.html',
})
export class AnimeDetailPage {
	titleHeader : string = '';
  slug: string = '';
  data: any;
  loaded: boolean = false;
  isSetFavorite: boolean = false;
  episodes: any = [];
  episodesLoaded: boolean = false;
  is_favorite: boolean = false;
  episodesNextPage: any = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public animeProvider: AnimeProvider, public loadingCtrl: LoadingController, private storage: Storage) {
    this.titleHeader = this.navParams.get('title');
    this.slug = this.navParams.get('slug');

    storage.get('anime_'+this.slug).then((val) => {
      if(val){
        this.is_favorite = true;
      } else {
        this.is_favorite = false;
      }
    });

    this.animeProvider.get( this.slug )
      .subscribe( res => {
        console.log(res);
        this.data = res.data;
        this.data.title = this.titleHeader;
        this.data.slug = this.slug;
        this.loaded = true;
        this.animeProvider.getByAnime( this.slug, 1 )
          .subscribe( res => {
            console.log(res);
            this.episodes = res.episodes;
            this.episodesLoaded = true;
            this.episodesNextPage = res.nextPage;
          });
      });
  }

  ionViewDidLoad() {
    console.log( this.navParams.get('title') );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  toggleFavorite(){
    if( this.isSetFavorite ){ return; }
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
    });

    this.isSetFavorite = true;
    loader.present();

    let _self = this;

    this.storage.get('anime_'+this.slug).then((val) => {

      if( val ){
        _self.is_favorite = false;
        _self.storage.remove('anime_'+_self.slug);
        _self.storage.get('favorites').then(function(val){
          console.log(JSON.parse(val));
          loader.dismiss();
          _self.isSetFavorite = false;
        });

        return;
      }

      let now = ( new Date().getTime() );
      _self.storage.set('anime_'+_self.slug, JSON.stringify({update_at: now, data: _self.data}));
      _self.storage.get('favorites').then((val) => {
         val = JSON.parse(val);
         console.log(val);
         val.push('anime_'+_self.slug);
         console.log(val);
         _self.storage.set('favorites', JSON.stringify(val));
          _self.is_favorite = true;
          loader.dismiss();
          _self.isSetFavorite = false;
      });


    });

  };

  doInfinite(e){
    let _self = this;
    if(!this.episodesLoaded || !this.episodesNextPage){
      e.complete();
      return;
    }
    this.animeProvider.getByAnime( this.slug, this.episodesNextPage )
      .subscribe( res => {
        if(res.episodes.length){
          res.episodes.map(function(a){
            _self.episodes.push(a);
          });
          _self.episodesNextPage = res.nextPage;
        };
        e.complete();
      });
  }

}
