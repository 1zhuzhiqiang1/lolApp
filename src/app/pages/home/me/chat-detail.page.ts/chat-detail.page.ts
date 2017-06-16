import {Component} from '@angular/core';
import {NavController} from "ionic-angular";


@Component({
  templateUrl: 'chat-detail.page.html'
})
export class ChatDetailPage {
  friends;

  constructor(public navCtr: NavController) {
    this.friends = [1, 2];
  }

  itemSelect(people) {
  }
}
