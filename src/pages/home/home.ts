import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EpisodesProvider } from '../../providers/episodes/episodes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data: any;

  constructor(public navCtrl: NavController, public episodesProvider: EpisodesProvider) {
    let _self = this;
    this.data = {
      episodes: []
    };

    this.episodesProvider.listAll()
      .subscribe( res => {
        _self.data = res;
        console.log(_self.data)
      })
  }

}
