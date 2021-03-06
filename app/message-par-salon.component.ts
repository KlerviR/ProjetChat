import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MessageService } from './message.service'
import { Message } from './message';
import { MomentService } from './moment.service';

@Component({
  templateUrl: 'app/message-par-salon.component.html'
})

export class MessageParSalonComponent {
    private idSalon : number = 0;

    constructor(private route: ActivatedRoute, private service: MessageService ) {
      this.route.params.subscribe(params => { this.idSalon = params['id']; });
    }

    public listeMessageParDate() {
      return this.service.findFromSalonAndDate(this.idSalon, "14022018105420");
    }
}
