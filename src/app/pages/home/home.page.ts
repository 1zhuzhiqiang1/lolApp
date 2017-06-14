import {Component} from '@angular/core';


// 5个tab页面
import { ActivityPage } from './ActivityCenter/activity.page';
import { DuowanVideoPage } from './VideoCenter/duowan/duowan-video.page';
import { MatchPage } from './MatchCenter/match.page';
import { VideoPage } from './VideoCenter/video.page';
import { InfoPage } from './ZongHeZiXun/zixun.page';
import { MePage } from './me/me.page';

@Component({
	templateUrl:'home.page.html'
})
export class HomePage {
	activityPage = ActivityPage;
	matchPage = MatchPage;
	videoPage = VideoPage;
	infoPage = InfoPage;
	mePage = MePage;
	duowanPage = DuowanVideoPage;

	constructor(){
		
	}
}