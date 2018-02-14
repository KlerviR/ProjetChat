import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfigService } from './app-config.service';
import { Utilisateur } from './utilisateur';


@Injectable()
export class AuthService {

	
	
	constructor(private appConfig: AppConfigService, private http: Http) {}
	
	public findByUsername(username: string) {
//		var token: string;
//		this.http.post(this.appConfig.uri + "/auth", { username: "nom_user" })
//			.subscribe(resp => this.token = resp.json());
//		console.log(this.token);
	}
	
}