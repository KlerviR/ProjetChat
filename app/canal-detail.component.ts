import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanauxService } from './canaux.service';

@Component({
    selector: 'eshop-app',
    templateUrl: 'app/canal-detail.component.html'
})

export class CanalDetailComponent {
	
	public canal: Canal = new Canal();
	
	constructor(private route: ActivatedRoute, private service: CanauxService) {
		this.route.params.subscribe(params => this.canal = service.findById(params['id']));
	}
	
}
