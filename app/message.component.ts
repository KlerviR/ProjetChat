import { Component } from '@angular/core';
import { MessageService } from './message.service'
import { Message } from './message';
import { MomentService } from './moment.service'

@Component({
  templateUrl: 'app/message.component.html'
})

export class MessageComponent {
    private myDate: date;

    constructor(private service: MessageService, private momentService: MomentService) {
    }

    public listeMessageParDate() {
      return this.service.findAllFromDate("14022018105420");
    }
}
