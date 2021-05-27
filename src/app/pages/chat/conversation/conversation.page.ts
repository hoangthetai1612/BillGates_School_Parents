/* eslint-disable @typescript-eslint/naming-convention */
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BaseChatComponent,
  CiSocketService,
} from '@consult-indochina/websocket';
import { IonContent, ViewDidEnter } from '@ionic/angular';
import { merge, Observable, Subject } from 'rxjs';
import { map, scan, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from 'src/app/service/message.service';

export interface MessageInterface {
  Action: ActionMessage;
  Content: string;
  SenderUserProfileId: number | string;
  MessageId: number | string;
  RecipientUserProfileId: number | string;
  CreatedOn: string;
  Type: TypeMessageEnum;
}
export enum ActionMessage {
  receive = 'receiveMessage',
  sended = 'sendMessage',
  sendedGroup = 'sendGroupMessage',
  callRequest = 'callRequest',
  callResponse = 'callResponse',
  videoCallDisconnect = 'videoCallDisconnect',
}
export enum TypeMessageEnum {
  normalMessage = 1,
  imageMessage = 2,
  videoMessage = 3,
  videoCallMessage = 4,
}
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage
  extends BaseChatComponent
  implements OnInit, OnDestroy, ViewDidEnter
{
  his: Observable<any>;
  messageSubject: Subject<any> = new Subject();
  reciverId;
  defaultHref = 'main/chat';
  currentUserId = JSON.parse(localStorage.getItem('access_token'))
    .UserProfileId;
  currentMsg: Partial<MessageInterface>;
  msgText: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private socketService: CiSocketService
  ) {
    super();
    this.reciverId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getHistory(this.reciverId);
    this.socketService.connect();
    this.socketService.messages$.subscribe((res) => {
      console.log(res);
      if (res) {
        this.messageSubject.next(JSON.parse(res));
      }
    });
  }

  ionViewDidEnter() {
    this.triggerScrollToBottom();
  }

  ngOnDestroy() {
    this.socketService.close();
  }

  updateListMessage(a: any[], v) {
    const result = [...a];
    const isRender = a.some((val) => val.CreatedOn !== v.CreatedOn);

    if (isRender && v.Action === 'receiveMessage') {
      return result;
    }
    result.push(v);
    return result;
  }

  getHistory(reciveid) {
    this.his = merge(
      this.messageService.getListMessage(reciveid).pipe(
        map((res: any) => {
          console.log(res);
          return res.body.Payload.reverse();
        })
      ),
      this.messageSubject
    ).pipe(
      tap(() => {
        this.scrollToBottom();
      }),
      scan((products: any[], product: any) =>
        this.updateListMessage(products, product)
      ),
      shareReplay(1)
    );
  }

  sendMessage() {
    this.currentMsg = {
      Action: ActionMessage.sended,
      Content: this.msgText,
      CreatedOn: new Date().toISOString(),
      RecipientUserProfileId: this.reciverId,
      SenderUserProfileId: this.currentUserId,
      Type: 1,
    };

    this.messageSubject.next(this.currentMsg);
    this.socketService.sendMessage(this.currentMsg);
    this.msgText = '';
  }
}
