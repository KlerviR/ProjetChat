import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CanauxService } from './canaux.service';
import { Canal } from './canal';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/canal-detail.component.html'
})

export class CanalDetailComponent {
	
	public canal: Canal = new Canal();
	
	constructor(private route: ActivatedRoute, private service: CanauxService) {
		this.route.params.subscribe(params => service.findById(params['id']).then(canal => this.canal = canal) );
	}
	
}
