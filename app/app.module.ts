import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppConfigService } from './app-config.service';


@NgModule({
    imports: [
        BrowserModule
    ],

    providers: [
        AppConfigService
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
