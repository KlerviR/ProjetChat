import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CanauxComponent } from './canaux.component';
import { CanalDetailComponent } from './canal-detail.component';
import { MessageComponent } from './message.component';
import { AuthComponent } from './auth.component';
import { MessageParSalonComponent } from './message-par-salon.component';

import { AppConfigService } from './app-config.service';
import { MessageService } from './message.service';
import { CanauxService } from './canaux.service';
import { AuthService } from './auth.service';
import { MomentService } from './moment.service';

MessageParSalonComponent


const routes: Routes = [
	{ path: 'messages', component: MessageComponent },
	{ path: 'salon/:id/messages', component: MessageParSalonComponent },
	{ path: 'canal', component: CanauxComponent },
	{ path: 'canal/:id', component: CanalDetailComponent },
	{ path: 'auth', component: AuthComponent }
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
		CanauxService,
		AuthService,
		MomentService
    ],

    declarations: [
        AppComponent,
		CanauxComponent,
		CanalDetailComponent,
		MessageComponent,
		AuthComponent,
		MessageParSalonComponent
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
