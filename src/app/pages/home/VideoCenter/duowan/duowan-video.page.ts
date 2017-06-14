import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { Config } from '../../../../../app/Utils/Config';

// import { BasePage } from '../../../base/BasePage';
import { VideoDetailPage } from '../videoDetailPage/video-detail.page';

declare let IQWebview:any;
declare let wizViewManager:any;

@Component({
	templateUrl:'duowan-video.page.html'
})
export class DuowanVideoPage {
	videos = [];
	private currentPage = 1;
	loader;

	constructor(
		private loading:LoadingController,
		private http: Http,
		private navCtrl:NavController,
		public plt: Platform
	){
		// super(loading);
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
		// this.videos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
		this.presentLoading();
		let option = {
			params : {
				page:this.currentPage
			}
		}
		this.http.get(Config.BaseUrl+"video/duowan",option).subscribe(rep => {
			let response = rep.json();
			console.log(response);
			if(response.success){
				this.videos = response.data;
			}
			this.hideLoadding();
		},error => {
			this.hideLoadding();
		});
	}

	doInfinite(infiniteScroll){
		let option = {
			params : {
				page:++this.currentPage
			}
		}
		this.http.get(Config.BaseUrl+"video/duowan",option).subscribe(rep => {
			let response = rep.json();
			// console.log(response);
			if(response.success){
				this.videos = this.videos.concat(response.data);
				console.log(this.videos.length);
				infiniteScroll.complete();
			}
		},error => {
			infiniteScroll.complete();
		});
	}

	itemClick(item){
		this.navCtrl.push(VideoDetailPage,{
			item:item
		});
		//如果是Android平台
		// if(this.plt.is('android')){
		// 	IQWebview.openNewWindow(item.videoUrl,function(success){
		// 		console.log(success)
		// 	},function(error){
		// 		console.log(error);
		// 	});
		// }else if(this.plt.is('ios')){
		// 	wizViewManager.create("detail", {src: item.videoUrl}, function (success) {
		// 		var animation = {
		// 			type: "slideInFromRight",
		// 			duration: 300
		// 		};
		// 		wizViewManager.show("detail", {animation: animation},function(success){console.log("show scucess"),function(error){console.log("show error")}});
		// 	},function(error){console.log("create error")});
		// }
	}
}