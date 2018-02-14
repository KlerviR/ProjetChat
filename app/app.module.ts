import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CanauxComponent } from './canaux.component';
import { MessageComponent } from './message.component';

import { AppConfigService } from './app-config.service';
import { MessageService } from './message.service';


const routes: Routes = [
  { path: 'messages', component: MessageComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],

    providers: [
        AppConfigService,
        MessageService
    ],

    declarations: [
        AppComponent,
		CanauxComponent,
    MessageComponent
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
