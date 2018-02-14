import { Component } from '@angular/core';

import { CanauxService } from './canaux.service';


@Component({
    selector: 'eshop-app',
    templateUrl: 'app/canaux.component.html'
})

export class CanauxComponent { 

	constructor(private service: CanauxService) {}

}
