import {Component} from '@angular/core';

import {Config} from '../../../app/Utils/Config';
// import {Config} from 'src/app/Utils/Config';

@Component({})
class BasePage {
  protected loader;
  protected loadingCtrl;
  protected config = Config;

  constructor(loadingCtrl) {
    this.loadingCtrl = loadingCtrl;
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "数据加载中..."
    });
    this.loader.present();
  }

  hideLoadding() {
    this.loader.dismiss();
  }

}
