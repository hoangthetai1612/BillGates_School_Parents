import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseChatComponent } from '@consult-indochina/websocket';
import { merge, Observable, Subject } from 'rxjs';
import { map, scan, shareReplay } from 'rxjs/operators';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage extends BaseChatComponent implements OnInit {
  his: Observable<any>;
  deleteSubject: Subject<any>;
  reciverId;
  constructor(private messageService: MessageService, private activatedRoute: ActivatedRoute) {
    super();
    this.reciverId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getHistory(this.reciverId);
  }
  delRandomScan(a, v){
  }

  getHistory(reciveid){
    this.his = merge(
      this.messageService.getListMessage(reciveid).pipe(
        map((res: any) => {
          console.log(res);
          return res.body.Payload.reverse();
        })
      ),
      this.deleteSubject
    ).pipe(
      scan((products: any[], product: any) => this.delRandomScan(products, product)),
      shareReplay(1)
    );
  }
}

