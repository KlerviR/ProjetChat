import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CanauxComponent } from './canaux.component';
import { MessageComponent } from './message.component';

import { AppConfigService } from './app-config.service';
import { MessageService } from './message.service';
import { CanauxService } from './canaux.service';


const routes: Routes = [
	{ path: 'messages', component: MessageComponent },
	{ path: 'canal', component: CanauxComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],

    providers: [
        AppConfigService,
        MessageService,
		CanauxService
    ],

    declarations: [
        AppComponent,
		CanauxComponent,
		MessageComponent
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
