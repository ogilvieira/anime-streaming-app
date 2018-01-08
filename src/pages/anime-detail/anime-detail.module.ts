import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimeDetailPage } from './anime-detail';

@NgModule({
  declarations: [
    AnimeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimeDetailPage),
  ],
})
export class AnimeDetailPageModule {}
