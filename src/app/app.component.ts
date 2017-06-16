import {Component, ViewChild} from '@angular/core';
import {Platform, App, ToastController, Nav, ViewController, Tabs} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from './pages/home/home.page';

declare let RongCloudLibPlugin: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  backButtonPressed;

  constructor(public platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public app: App,
              public toast: ToastController) {
    platform.ready().then(() => {
      this.backButtonPressed = false;
      statusBar.styleDefault();
      splashScreen.hide();
      console.log("当前的程序版本是：" + JSON.stringify(this.platform.versions()));
      this.initRongCloud();
      // this.registerBack();
    });
  }

  // 注册返回键
  private registerBack() {
    this.platform.registerBackButtonAction(() => {
      console.log("root:" + this.app.getRootNav().getActive().instance);
      let activeNav: ViewController = this.app.getActiveNav().getActive();
      console.log(activeNav);
      console.log(activeNav.instance);
      // let tabs: Tabs = activeNav.instance.rootPage.tabs;
      // let select = tabs.getSelected();
      // return select.canGoBack() ? select.pop() : this.showExit()
    }, 1);
  }

  private showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();
    }
    this.toast.create({
      message: '再按一次退出应用',
      duration: 2000,
      position: 'bottom',
      cssClass: 'background-color:white text-align:center'
    }).present();
    this.backButtonPressed = true;
    setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
  }

  // 初始化融云SDK
  private initRongCloud() {
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
  }

}
