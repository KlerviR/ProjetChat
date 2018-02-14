import { Component } from '@angular/core';

import { Proprietaire } from './proprietaire';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/app.component.html'
})

export class Canal {
	public id: number = 0;
	public nom: string;
	public proprietaire: Proprietaire = new Proprietaire();
	public message: string;
	
	constructor(nom?: string) {
		this.nom = nom;
	}
}