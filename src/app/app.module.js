var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
// import { BasePage } from './pages/base/BasePage';
import { HomePage } from './pages/home/home.page';
import { ActivityPage } from './pages/home/ActivityCenter/activity.page';
import { MatchPage } from './pages/home/MatchCenter/match.page';
import { MePage } from './pages/home/me/me.page';
import { VideoPage } from './pages/home/VideoCenter/video.page';
import { InfoPage } from './pages/home/ZongHeZiXun/zixun.page';
// 视频中心
import { VideoDetailPage } from './pages/home/VideoCenter/videoDetailPage/video-detail.page'; //视频详情页
import { DuowanVideoPage } from './pages/home/VideoCenter/duowan/duowan-video.page';
import { BanBenGengXinPage } from './pages/home/ZongHeZiXun/ban-ben-geng-xin/banBenGengXin.page';
import { DianJingXinWenPage } from './/pages/home/ZongHeZiXun/dian-jing-xin-wen/dianJingXinWen.page';
import { LuTuBaGuaPage } from './pages/home/ZongHeZiXun/lu-tu-ba-gua/luTuBaGua.page';
import { ZuiXinGengXinPage } from './pages/home/ZongHeZiXun/zui-xin-geng-xin/zuiXinGengXin.page';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp, HomePage, ActivityPage, MatchPage, MePage, VideoPage, InfoPage,
            BanBenGengXinPage, DianJingXinWenPage, LuTuBaGuaPage, ZuiXinGengXinPage,
            VideoDetailPage, DuowanVideoPage
        ],
        imports: [
            BrowserModule, HttpModule,
            IonicModule.forRoot(MyApp, {
                mode: "ios",
                backButtonText: '返回',
                swipeBackEnabled: true
            }),
            IonicStorageModule.forRoot({
                name: '__loldb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp, HomePage, ActivityPage, MatchPage, MePage, VideoPage, InfoPage,
            BanBenGengXinPage, DianJingXinWenPage, LuTuBaGuaPage, ZuiXinGengXinPage,
            VideoDetailPage, DuowanVideoPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map