import { Expediteur } from './expediteur'

export class Message {
  public id: number;
  public contenu: string;
  public date;
  public expediteur: Expediteur;
  public salonId: number;
}
