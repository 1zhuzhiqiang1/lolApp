import {Component} from '@angular/core';
import {Http} from '@angular/http';

import {Config} from '../../../../app/Utils/Config';

declare let RongCloudLibPlugin: any;

@Component({
  templateUrl: 'activity.page.html'
})
export class ActivityPage {

  constructor(private http: Http) {
  }

  ionViewDidLoad() {
    RongCloudLibPlugin.connect({
      token: "sQKWLNsD/DbNJ0oAdB6+BscyfAwJjopBNJrfR2IJPGvmxvT57NJ3cr5wKf2a1fFWqSdLTDJ+D4pLS09/nD/hGCnkLPT1KLVZ"
    }, function (ret, err) {
      console.log(ret);
      if (ret.status == 'success') {
        console.log("登录的用户是：" + ret.result.userId);
      } else {
        console.log("链接服务器失败");
      }
    });
  }

}
