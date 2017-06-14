import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from './pages/home/home.page';

declare let RongCloudLibPlugin: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // 初始化融云sdk
      if (this.platform.is("ios") || this.platform.is("android")) {
        RongCloudLibPlugin.init({
          appKey: "mgb7ka1nmff6g"
        }, function (ret, err) {
          if (ret.status == 'error') {
            console.log("初始化SDk出错");
          } else {
            console.log("初始化sdk成功");
          }
        });
      }
    });
  }
}
