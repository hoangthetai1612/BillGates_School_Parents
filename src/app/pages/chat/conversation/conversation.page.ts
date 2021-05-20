/* eslint-disable @typescript-eslint/naming-convention */
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BaseChatComponent,
  CiSocketService,
} from '@consult-indochina/websocket';
import { IonContent } from '@ionic/angular';
import { merge, Observable, Subject } from 'rxjs';
import { map, scan, shareReplay } from 'rxjs/operators';
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
  implements OnInit, OnDestroy
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
  @ViewChild('listMessageParent', { read: ViewContainerRef })
  listMessageParent: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonContent) messageContainer: any;
  private mutationObserver: MutationObserver;
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
    this.socketService.connect();
    setTimeout(() => {
      this.messageContainer.scrollToBottom(300);
    }, 500);

    //Mutation Observer xem sử thay đổi của DOM trong component. Auto scroll khi render tin nhắn mới
    this.mutationObserver = new MutationObserver((res: any) => {
      this.messageContainer.scrollToBottom(300);
    });

    this.mutationObserver.observe(
      this.listMessageParent.element.nativeElement,
      {
        childList: true,
      }
    );
  }

  ngOnDestroy() {
    this.socketService.close();
  }

  updateListMessage(a: any[], v) {
    const result = [...a];
    const isRender = a.some((val) => val.CreatedOn !== v.CreatedOn);
    console.log(isRender);

    if (isRender && v.MessageId) {
      return result;
    }
    result.push(v);
    return result;
  }

  getHistory(reciveid) {
    this.his = merge(
      this.messageService.getListMessage(2053).pipe(
        map((res: any) => {
          console.log(res);
          return res.body.Payload.reverse();
        })
      ),
      this.messageSubject
    ).pipe(
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
      RecipientUserProfileId: 2053,
      SenderUserProfileId: this.currentUserId,
      Type: 1,
    };
    console.log(this.currentMsg);

    this.messageSubject.next(this.currentMsg);
    this.socketService.sendMessage(this.currentMsg);
    this.msgText = '';
  }
}
