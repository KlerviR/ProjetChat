import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';
import { Message } from './message';

@Injectable()
export class MessageService {
  private listeMessages: Array<Message>;

  constructor(private http: Http, private appConfig: AppConfigService) {
  }

  findAllFromDate(date: string) {
      if (this.listeMessages == null) {
        this.http
          .get(this.appConfig.uri + "/canal/message/" + date)
          .subscribe(resp => this.listeMessages = resp.json());
        return new Array<Message>();
      }
      else {
        return this.listeMessages;
      }
  }

    findFromSalonAndDate(idSalon: number, date: string) {
        if (this.listeMessages == null) {
          this.http
            .get(this.appConfig.uri + "/canal/" + idSalon + "/message/" + date)
            .subscribe(resp => this.listeMessages = resp.json());
          return new Array<Message>();
        }
        else {
          return this.listeMessages;
        }
}
