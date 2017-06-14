import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';  

// import { BasePage } from '../../../base/BasePage';

declare let Framework7:any;

@Component({
	templateUrl:'zixun-detail.page.html'
})
export class ZiXunDetailPage {
	private item:any;
	private srcUrl:any;
	private $$ = Framework7.$;
	loader;

	constructor(
		private navParams: NavParams,
		private sanitizer: DomSanitizer,
		private loading:LoadingController
	){
		// super(loading);
		this.initEvent();
		this.item = this.navParams.get('item');
		this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.link);
		this.presentLoading();
	}

	presentLoading() {
		this.loader = this.loading.create({
			content: "数据加载中..."
		});
		this.loader.present();
	}

	hideLoadding(){
		this.loader.dismiss();
	}

	initEvent(){
		setTimeout(()=>{
			this.hideLoadding();
		},2000);
	}
}