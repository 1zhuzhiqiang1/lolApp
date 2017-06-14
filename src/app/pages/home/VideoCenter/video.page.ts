import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { Config } from '../../../../app/Utils/Config';

// import { BasePage } from '../../base/BasePage';
import { VideoDetailPage } from './videoDetailPage/video-detail.page';

declare let wizViewManager:any;
declare let IQWebview:any;

class VideoItem {
	item0:Object;
	item1:Object;
}

@Component({
	templateUrl:'video.page.html'
})
export class VideoPage {
	mpvList;
	newList;
	tpvList;
	wpvList;
	loader;

	constructor(
		private http: Http,
		private loading:LoadingController,
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
		this.presentLoading();
		this.http.get(Config.BaseUrl+"video/videolist")
		.subscribe(rep => {
			let result = rep.json();
			let data = JSON.parse(result.data);
			data = data.msg;
			console.log(data);
			this.mpvList = data.mpvlist;
			this.newList = data.newlist;
			this.tpvList = data.tpvlist;
			this.wpvList = data.wpvlist;
			console.log(this.mpvList);
			this.hideLoadding();
		},error => {
			this.hideLoadding();
		});
	}

	// 点击每一行
	itemClick(item){
		//如果是Android平台
		if(this.plt.is('android')){
			IQWebview.openNewWindow(item.appurl,function(success){
				console.log(success)
			},function(error){
				console.log(error);
			});
		}else if(this.plt.is('ios')){
			wizViewManager.create("detail", {src: item.appurl}, function (success) {
				var animation = {
					type: "slideInFromRight",
					duration: 300
				};
				wizViewManager.show("detail", {animation: animation},function(success){console.log("show scucess"),function(error){console.log("show error")}});
			},function(error){console.log("create error")});
		}
		
	}

}