import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimePage } from './anime';

@NgModule({
  declarations: [
    AnimePage,
  ],
  imports: [
    IonicPageModule.forChild(AnimePage),
  ],
})
export class AnimePageModule {}
