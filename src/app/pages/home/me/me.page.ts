import { Component } from '@angular/core';

import { Config } from '../../../../app/Utils/Config';
 
declare let Framework7:any;
declare let FileUploadOptions:any;
declare let FileTransfer:any;
declare let Camera:any;
declare let camera:any;

@Component({
	templateUrl:'me.page.html'
})
export class MePage{
	$ = Framework7.$;
	
	ionViewDidLoad(){
		console.log("我的页面初始化完成");
		this.initDomEvent();
	}

	initDomEvent(){
		this.$('#img_header').click(() => {
			this.openCamera();
		});
	}

	selectImg(){
		console.log("点击选择图片");
	}

	setOptions(srcType) {
		var options = {
			// Some common settings are 20, 50, and 100
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			// In this app, dynamically set the picture source, Camera or photo gallery
			sourceType: srcType,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE,
			allowEdit: true,
			correctOrientation: true  //Corrects Android orientation quirks
		}
		return options;
	}
	openCamera() {
		var srcType = Camera.PictureSourceType.CAMERA;
		var options = this.setOptions(srcType);
		// var func = createNewFileEntry;
		camera.getPicture((imageUri) => {
			this.$('#img_header').attr("src",imageUri);
			this.uploadFile(imageUri);
		},(error)=>{
			console.debug("Unable to obtain picture: " + error, "app");
		},options);
	}
	//上传图片
	uploadFile(imgUri){
		let options = new FileUploadOptions();
		options.httpMethod = "POST";
		options.mimeType = "multipart/form-data";
		options.params = {
			"name":"zhuzhiqiang"
		}

		let ft = new FileTransfer();
		ft.upload(imgUri, encodeURI(Config.BaseUrl+"me/upload/header"), 
			function(success){
				console.log("上传成功")
			}, function(error){
				console.log("上传失败");
			}, options);
	}
}