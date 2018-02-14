import { Component } from '@angular/core';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/app.component.html'
})

export class Canal {
	public id: number = 0;
	public nom: string;
	
	constructor(nom?: string) {
		this.nom = nom;
	}
}