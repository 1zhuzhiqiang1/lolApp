var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
// 5个tab页面
import { ActivityPage } from './ActivityCenter/activity.page';
import { DuowanVideoPage } from './VideoCenter/duowan/duowan-video.page';
import { MatchPage } from './MatchCenter/match.page';
import { VideoPage } from './VideoCenter/video.page';
import { InfoPage } from './ZongHeZiXun/zixun.page';
import { MePage } from './me/me.page';
var HomePage = (function () {
    function HomePage() {
        this.activityPage = ActivityPage;
        this.matchPage = MatchPage;
        this.videoPage = VideoPage;
        this.infoPage = InfoPage;
        this.mePage = MePage;
        this.duowanPage = DuowanVideoPage;
    }
    return HomePage;
}());
HomePage = __decorate([
    Component({
        templateUrl: 'home.page.html'
    }),
    __metadata("design:paramtypes", [])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map