import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';

import { Config } from '../../../../../app/Utils/Config';

// import { BasePage } from '../../../base/BasePage';

declare let Framework7:any;

@Component({
	templateUrl:'video-detail.page.html'
})
export class VideoDetailPage {
	item;
	$$ = Framework7.$;
	private videoUrl;
	loader;

	constructor(
		private navParams: NavParams,
		private http: Http,
		private loading:LoadingController,
	){
		// super(loading);
		this.item = this.navParams.get('item');
		console.log(this.item);
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

	ionViewDidLoad(){
		this.initEvent();
		this.presentLoading();
		let option = {
			params:{
				url:this.item.videoUrl
			}
		}
		this.http.get(Config.BaseUrl+"video/getVideoAddress",option).subscribe(rep => {
			let response = rep.json();
			if(response.success){
				this.videoUrl = response.data;
			}
			console.log(this.videoUrl);
			this.hideLoadding();
		},error => {
			this.hideLoadding();
		});
	}

	initEvent(){
		this.$$('#video_btn').click(() => {
			this.$$('.video-cover').attr("opacity",0);
			this.$$('#video_btn').attr("display","none");
			// this.$$('#video').play();
		});
	}

}