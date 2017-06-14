import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController, App } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { Config } from '../../../../Utils/Config';
// import { BasePage } from '../../../base/BasePage';

import { ZiXunDetailPage } from '../zixun-detail/zixun-detail.page';

declare let IQWebview:any;

@Component({
	templateUrl:'dianJingXinWen.page.html'
})
export class DianJingXinWenPage {
	private newDatas = [];
	private currentPage = 1;
	loader;

	constructor(
		private http: Http,
		private loading: LoadingController,
		private plt: Platform,
		private navCtrl:NavController,
		public appCtrl: App
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
		let option = {
			params : {
				page:this.currentPage
			}
		}
		this.http.get(Config.BaseUrl+"zixun/dianjingxinwen",option)
			.subscribe(rep => {
			let body = rep.json();
			this.newDatas = body.data;
			console.log(this.newDatas);
			this.hideLoadding();
			// console.log(rep.json());
		},error => {
			this.hideLoadding();
		});
	}

	itemSelected(item){
		this.appCtrl.getRootNav().push(ZiXunDetailPage,{
			item:item
		});
		// if(this.plt.is('android')){
		// 	IQWebview.openNewWindow(item.link,"详情",function(success){
		// 		console.log(success)
		// 	},function(error){
		// 		console.log(error);
		// 	});
		// }
	}

	// 上拉加载
	doInfinite(infiniteScroll) {
		let option = {
			params : {
				page:++this.currentPage
			}
		}
		this.http.get(Config.BaseUrl+"zixun/dianjingxinwen",option)
		.subscribe(rep => {
			let body = rep.json();
			if(null != body.data){
				this.newDatas = this.newDatas.concat(body.data);
			}
			console.log(this.newDatas);
			infiniteScroll.complete();
		},error => {
			infiniteScroll.complete();
		});
	}

}