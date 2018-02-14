import { Expediteur } from './expediteur'
export class Message {
  public id: number;
  public contenu: string;
  public date: string;
  public expediteur: Expediteur;
  public salonId: number;
}
