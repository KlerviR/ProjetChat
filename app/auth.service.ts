import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfigService } from './app-config.service';


@Injectable()
export class AuthService {
	
	constructor(private appConfig: AppConfigService, private http: Http) {}
	
	public findByUsername(id : string) : string {
		
	}
	
}