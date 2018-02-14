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

    public listeMessageParDate() { //-----------A supprimer
      return this.service.findAllFromDate("14022018105420");
    }

    //public listeMessageParDate(myDate: date) {
      //dateFormatee = momentService.format(myDate);
      //return this.service.findAllFromDate(dateFormatee);
    //}

    public convertToDate(date: string) {

    }
}
