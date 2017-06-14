import { Component } from '@angular/core';

import { BanBenGengXinPage } from './ban-ben-geng-xin/banBenGengXin.page';
import { DianJingXinWenPage } from './dian-jing-xin-wen/dianJingXinWen.page';
import { LuTuBaGuaPage } from './lu-tu-ba-gua/luTuBaGua.page';
import { ZuiXinGengXinPage } from './zui-xin-geng-xin/zuiXinGengXin.page';

@Component({
	templateUrl:'zixun.page.html'
})
export class InfoPage {
	banBenGengXinPage = BanBenGengXinPage;
	dianJingXinWenPage = DianJingXinWenPage;
	luTuBaGuaPage = LuTuBaGuaPage;
	zuiXinGengXinPage = ZuiXinGengXinPage;
	constructor(){}
}