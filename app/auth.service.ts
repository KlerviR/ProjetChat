import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfigService } from './app-config.service';
import { Utilisateur } from './utilisateur';


@Injectable()
export class AuthService {

	public token;
	
	constructor(private appConfig: AppConfigService, private http: Http) {}
	
	public findByUsername(nom: string){
		return this.http.post(this.appConfig.uri + "/auth", { username: nom })
			.subscribe(resp => this.token = resp.json().token);
	}
	
}