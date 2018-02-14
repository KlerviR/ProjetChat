import { Component } from '@angular/core';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/app.component.html'
})

export class Utilisateur {
	public id: number = 0;
	public username: string;
	public token: string;
	
	constructor(username?: string) {
		this.username = username;
	}
}