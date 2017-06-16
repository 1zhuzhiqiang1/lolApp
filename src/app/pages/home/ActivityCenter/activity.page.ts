import {Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import {Http} from '@angular/http';
import {Platform, Events, Content} from 'ionic-angular';

import {Config} from '../../../../app/Utils/Config';
import {ConversationType} from '../../../Utils/ConversationType';

declare let RongCloudLibPlugin: any;

@Component({
  templateUrl: 'activity.page.html'
})
export class ActivityPage {
  @ViewChild("input") input;

  datas: any;
  private EventsTag: string = "im:refresh";

  constructor(private http: Http, public plt: Platform, public event: Events, private cdRef: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    // this.datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15];
    this.datas = [];

    this.event.subscribe(this.EventsTag, (newItem) => {
      console.log("添加了一条消息：" + JSON.stringify(newItem));
      this.datas.push(newItem);
      this.cdRef.detectChanges();
    });

    if (this.plt.is("ios") || this.plt.is("android")) {
      // 连接服务器
      RongCloudLibPlugin.connect({
        token: "32eeXK3FLhhPC0mt008cnMcyfAwJjopBNJrfR2IJPGvmxvT57NJ3chyo2SZIjYOtfPHGlukvUWZLS09/nD/hGCnkLPT1KLVZ"
      }, (ret, err) => {
        if (ret.status == 'success') {
          console.log("登录的用户是：" + ret.result.userId);
          this.setMessageListener();
          this.joinCRoom();
        } else {
          console.log("链接服务器失败");
        }
      });
    }
  }

  ionViewWillUnload() {
    this.event.unsubscribe(this.EventsTag);
  }

  addNewItem(newItem) {
    this.event.publish(this.EventsTag, newItem);
  }

  /**
   * 发送聊天室消息(文字消息)
   */
  sendMessage() {
    if (this.plt.is("ios") || this.plt.is("android")) {
      RongCloudLibPlugin.sendTextMessage({
          conversationType: 'CHATROOM',
          targetId: '666666',
          text: this.input.value,
          extra: ''
        }, (ret, err) => {
          this.input.value = '';
          if (err) {
            console.log("发送消息失败：" + err);
            return;
          }
          if (ret.status == 'prepare') {
            console.log("prepare" + JSON.stringify(ret.result.message));
            this.datas.push(ret.result.message);
            this.cdRef.detectChanges();
          }
          else if (ret.status == 'success') {
            console.log("success" + JSON.stringify(ret.result));
          }
          else if (ret.status == 'error') {
            console.log(err.code);
          }
        }
      );
    }
  }

  /**
   * 设置消息监听器
   */
  private setMessageListener() {
    if (this.plt.is("ios") || this.plt.is("android")) {
      RongCloudLibPlugin.setOnReceiveMessageListener((ret, err) => {
        // console.log("收到消息：" + JSON.stringify(ret.result.message));
        // console.log(this.datas);
        // this.datas.push(ret.result.message);
        this.addNewItem(ret.result.message);
      })
    }
  }

  /**
   * 加入聊天室
   */
  private joinCRoom() {
    RongCloudLibPlugin.joinChatRoom({
      chatRoomId: '666666',
      defMessageCount: 20
    }, (ret, err) => {
      if (ret.status == 'success')
        console.log(JSON.stringify(ret.status));
      else
        console.log(err.code);
    })
  }


}
