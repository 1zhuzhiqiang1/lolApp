var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Config } from '../../../../Utils/Config';
import { BasePage } from '../../../base/BasePage';
var DianJingXinWenPage = (function (_super) {
    __extends(DianJingXinWenPage, _super);
    function DianJingXinWenPage(loading, http) {
        var _this = _super.call(this, loading) || this;
        _this.loading = loading;
        _this.http = http;
        return _this;
    }
    DianJingXinWenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        var option = {
            params: {
                page: "0"
            }
        };
        this.http.get(Config.BaseUrl + "zixun/dianjingxinwen", option)
            .subscribe(function (rep) {
            var body = rep.json();
            _this.newDatas = body.data;
            console.log(_this.newDatas);
            _this.hideLoadding();
            // console.log(rep.json());
        });
    };
    DianJingXinWenPage.prototype.itemSelected = function (item) {
    };
    return DianJingXinWenPage;
}(BasePage));
DianJingXinWenPage = __decorate([
    Component({
        templateUrl: 'dianJingXinWen.page.html'
    }),
    __metadata("design:paramtypes", [LoadingController,
        Http])
], DianJingXinWenPage);
export { DianJingXinWenPage };
//# sourceMappingURL=dianJingXinWen.page.js.map