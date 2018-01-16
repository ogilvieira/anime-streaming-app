var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { AnimePage } from '../pages/anime/anime';
import { NewEpisodesPage } from '../pages/newepisodes/newepisodes';
import { AnimeDetailPage } from '../pages/anime-detail/anime-detail';
// import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { AppSettings } from '../app-settings';
import { CategoryProvider } from '../providers/category/category';
import { EpisodesProvider } from '../providers/episodes/episodes';
import { AnimeProvider } from '../providers/anime/anime';
import { VideoPlayer } from '@ionic-native/video-player';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                CategoryPage,
                AnimePage,
                NewEpisodesPage,
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
                CategoryPage,
                AnimePage,
                NewEpisodesPage,
                AnimeDetailPage,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                VideoPlayer,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AppSettings,
                CategoryProvider,
                EpisodesProvider,
                AnimeProvider,
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
