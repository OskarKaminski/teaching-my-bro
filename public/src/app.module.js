import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//Modules

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//Pages
import { AppComponent }  from './app.component';

//Providers
import {PointsSvc} from './services/pointsSvc';

// Components
import {MultiplierComponent} from './multiplier/multiplier.component';
import {PlayerComponent} from './player/player.component';
import {BetComponent} from './bet/bet.component';

export class AppModule { }
AppModule.annotations = [
    new NgModule({
        imports:      [
            BrowserModule,
            FormsModule
        ],
        declarations: [
            AppComponent,
            MultiplierComponent,
            PlayerComponent,
            BetComponent
        ],
        providers: [
            PointsSvc
        ],
        bootstrap:    [ AppComponent ]
    })
];