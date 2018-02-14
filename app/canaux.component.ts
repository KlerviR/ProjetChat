import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Canal } from './canal';
import { CanauxService } from './canaux.service';


@Component({
    selector: 'eshop-app',
    templateUrl: 'app/canaux.component.html'
})

export class CanauxComponent {

	constructor(private service: CanauxService) {}

	public afficherListe() {
		return this.service.findAll();
	}

}
