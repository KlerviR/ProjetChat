import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/auth.component.html'
})

export class AuthComponent { 
	
	private utilisateur : Utilisateur = new Utilisateur();
	
	constructor(private service: AuthService, private router: Router) {}
	
	public valider() {
		this.service.findByUsername(this.utilisateur.username);
		this.router.navigate(['/canal']);
//		this.utilisateur = new Utilisateur();
	}
	
}