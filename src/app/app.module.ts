import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { AnimePage } from '../pages/anime/anime';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppSettings } from '../app-settings';
import { CategoryProvider } from '../providers/category/category';
import { EpisodesProvider } from '../providers/episodes/episodes';
import { AnimeProvider } from '../providers/anime/anime';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    AnimePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    AnimePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettings,
    CategoryProvider,
    EpisodesProvider,
    AnimeProvider
  ]
})
export class AppModule {}
