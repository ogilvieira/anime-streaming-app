import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AnimePage } from '../pages/anime/anime';
import { AnimeDetailPage } from '../pages/anime-detail/anime-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { AppSettings } from '../app-settings';
import { CategoryProvider } from '../providers/category/category';
import { EpisodesProvider } from '../providers/episodes/episodes';
import { AnimeProvider } from '../providers/anime/anime';
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimePage,
    AnimeDetailPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimePage,
    AnimeDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettings,
    CategoryProvider,
    EpisodesProvider,
    AnimeProvider,
    VideoPlayer,
    StreamingMedia
  ]
})
export class AppModule {}
