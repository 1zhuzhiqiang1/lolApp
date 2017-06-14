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
import { BanBenGengXinPage } from './ban-ben-geng-xin/banBenGengXin.page';
import { DianJingXinWenPage } from './dian-jing-xin-wen/dianJingXinWen.page';
import { LuTuBaGuaPage } from './lu-tu-ba-gua/luTuBaGua.page';
import { ZuiXinGengXinPage } from './zui-xin-geng-xin/zuiXinGengXin.page';
var InfoPage = (function () {
    function InfoPage() {
        this.banBenGengXinPage = BanBenGengXinPage;
        this.dianJingXinWenPage = DianJingXinWenPage;
        this.luTuBaGuaPage = LuTuBaGuaPage;
        this.zuiXinGengXinPage = ZuiXinGengXinPage;
    }
    return InfoPage;
}());
InfoPage = __decorate([
    Component({
        templateUrl: 'zixun.page.html'
    }),
    __metadata("design:paramtypes", [])
], InfoPage);
export { InfoPage };
//# sourceMappingURL=zixun.page.js.map