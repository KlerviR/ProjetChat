import { Expediteur } from './expediteur'

export class Message {
  public id: number;
  public contenu: string;
  public date: Date;
  public expediteur: Expediteur;
  public salonId: number;
}
