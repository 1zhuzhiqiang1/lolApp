import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {ChatDetailPage} from "../chat-detail.page.ts/chat-detail.page";


@Component({
  templateUrl: 'friend-list.page.html'
})
export class FriendListPage {
  friends;

  constructor(public navCtr: NavController) {
    this.friends = [1, 2];
  }

  itemSelect(people) {
    this.navCtr.push(ChatDetailPage, {
      item: people
    });
  }
}
