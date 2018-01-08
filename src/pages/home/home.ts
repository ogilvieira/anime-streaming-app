import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { EpisodesProvider } from '../../providers/episodes/episodes';
import { Storage } from '@ionic/storage';
import { AnimeDetailPage } from '../../pages/anime-detail/anime-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data: any = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public storage: Storage, public modalCtrl: ModalController) {

    this.loader.present();
    
    let _self = this;
    storage.get('favorites').then(function(val){
      console.log(val);
      if( val ){
        val = JSON.parse(val);
        console.log(val.length);
        
        let i = 0;
        let getAnime = function(){
          let e = val.pop();

          _self.storage.get(e).then((v) => {
            
            if(v){ _self.data.push(JSON.parse(v)); }
            if( i < (val.length-1)){
              i++;
              getAnime();
            } else {
              console.log( _self.data );
              _self.loader.dismiss();
              return;
            }

          });
        };

        getAnime(i);

      } else {
        _self.storage.set('favorites', JSON.stringify([])).then(function(val){
          _self.loader.dismiss();
        });
      }
    });
  }

  loader = this.loadingCtrl.create({
    content: "Carregando...",
  });

  openAnime(slug, title = "d"){
    console.log(slug);
    let profileModal = this.modalCtrl.create(AnimeDetailPage, { slug: slug, title: title });
    profileModal.present();
  }
}
