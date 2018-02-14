import { Component } from '@angular/core';
import { MessageService } from './message.service'
import { Message } from './message';

@Component({
  templateUrl: 'app/message.component.html'
})

export class MessageComponent {
    private message: Message = new Message();

    constructor(private service: MessageService) {
    }

    public listeMessageParDate() {
      return this.service.findAllFromDate("14022018105420");
    }
}
