var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Config } from '../../../../app/Utils/Config';
var MePage = (function () {
    function MePage() {
        this.$ = Framework7.$;
    }
    MePage.prototype.ionViewDidLoad = function () {
        console.log("我的页面初始化完成");
        this.initDomEvent();
    };
    MePage.prototype.initDomEvent = function () {
        var _this = this;
        this.$('#img_header').click(function () {
            _this.openCamera();
        });
    };
    MePage.prototype.selectImg = function () {
        console.log("点击选择图片");
    };
    MePage.prototype.setOptions = function (srcType) {
        var options = {
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true //Corrects Android orientation quirks
        };
        return options;
    };
    MePage.prototype.openCamera = function () {
        var _this = this;
        var srcType = Camera.PictureSourceType.CAMERA;
        var options = this.setOptions(srcType);
        // var func = createNewFileEntry;
        camera.getPicture(function (imageUri) {
            _this.$('#img_header').attr("src", imageUri);
            _this.uploadFile(imageUri);
        }, function (error) {
            console.debug("Unable to obtain picture: " + error, "app");
        }, options);
    };
    //上传图片
    MePage.prototype.uploadFile = function (imgUri) {
        var options = new FileUploadOptions();
        options.httpMethod = "POST";
        options.mimeType = "multipart/form-data";
        options.params = {
            "name": "zhuzhiqiang"
        };
        var ft = new FileTransfer();
        ft.upload(imgUri, encodeURI(Config.BaseUrl + "me/upload/header"), function (success) {
            console.log("上传成功");
        }, function (error) {
            console.log("上传失败");
        }, options);
    };
    return MePage;
}());
MePage = __decorate([
    Component({
        templateUrl: 'me.page.html'
    })
], MePage);
export { MePage };
//# sourceMappingURL=me.page.js.map