import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Platform} from 'ionic-angular';

import {Config} from '../../../../app/Utils/Config';

declare let RongCloudLibPlugin: any;

@Component({
  templateUrl: 'activity.page.html'
})
export class ActivityPage {
  news: any;

  constructor(private http: Http, public plt: Platform) {
  }

  ionViewDidLoad() {
    // 链接服务器
    if (this.plt.is("ios") || this.plt.is("android")) {
      RongCloudLibPlugin.connect({
        token: "sQKWLNsD/DbNJ0oAdB6+BscyfAwJjopBNJrfR2IJPGvmxvT57NJ3cr5wKf2a1fFWqSdLTDJ+D4pLS09/nD/hGCnkLPT1KLVZ"
      }, function (ret, err) {
        console.log(ret);
        if (ret.status == 'success') {
          console.log("登录的用户是：" + ret.result.userId);
          RongCloudLibPlugin.joinChatRoom({
            chatRoomId: '666666',
            defMessageCount: 20
          }, function (ret, err) {
            if (ret.status == 'success')
              console.log(JSON.stringify(ret.status));
            else
              alert(err.code);
          })
        } else {
          console.log("链接服务器失败");
        }
      });
    }
  }


}
