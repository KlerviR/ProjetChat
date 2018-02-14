import { Component } from '@angular/core';

import { AuthService } from './auth.service';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/auth.component.html'
})

export class AuthComponent { 
	
	public utilisateur : Utilisateur = new Utilisateur();
	
	constructor(private service: AuthService) {}
	
	public valider() {
		console.log(this.utilisateur.username);
		this.service.findByUsername(this.utilisateur.username);
		this.utilisateur = new Utilisateur();
	}
	
}