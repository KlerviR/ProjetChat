import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfigService } from './app-config.service';
import { Canal } from './canal';



@Injectable()
export class CanauxService { 
	
	private listeCanaux: Array<Canal>;
	
	constructor(private appConfig: AppConfigService, private http: Http) {}
	
	public findAll() : Array<Canal> {
		if (this.listeCanaux == null) {
			this.http.get(this.appConfig.uri + "/canal")
				.subscribe(resp => this.listeCanaux = resp.json());
			return new Array<Canal>();
		} else {
			return this.listeCanaux;
		}
	}
	
	public findById(id: string) {
	
	}
	
}