import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

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
		HttpModule,
		FormsModule
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
