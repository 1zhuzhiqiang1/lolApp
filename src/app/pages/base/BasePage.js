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
import { Config } from '../../../app/Utils/Config';
var BasePage = (function () {
    function BasePage(loadingCtrl) {
        this.config = Config;
        this.loadingCtrl = loadingCtrl;
    }
    BasePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "数据加载中..."
        });
        this.loader.present();
    };
    BasePage.prototype.hideLoadding = function () {
        this.loader.dismiss();
    };
    return BasePage;
}());
BasePage = __decorate([
    Component({}),
    __metadata("design:paramtypes", [Object])
], BasePage);
export { BasePage };
//# sourceMappingURL=BasePage.js.map