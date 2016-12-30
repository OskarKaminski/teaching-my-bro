import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AngularFireModule} from 'angularfire2';

//Modules
import {AppRouting} from './app.routes';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//Pages
import { AppComponent }  from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {GameComponent} from './pages/game/game.component';

//Providers
import {PointsSvc} from './services/pointsSvc';

// Components
import {MultiplierComponent} from './multiplier/multiplier.component';
import {PlayerComponent} from './player/player.component';
import {BetComponent} from './bet/bet.component';

export const firebaseConfig = {
    apiKey: "AIzaSyD4dH2Aza1dqa81QmaTFDbWEpd__8EwgKM",
    authDomain: "rocket-36d71.firebaseapp.com",
    databaseURL: "https://rocket-36d71.firebaseio.com",
    storageBucket: "rocket-36d71.appspot.com"
};

const AF = AngularFireModule.initializeApp(firebaseConfig);

export class AppModule { }
AppModule.annotations = [
    new NgModule({
        imports:      [
            BrowserModule,
            FormsModule,
            AF,
            AppRouting
        ],
        declarations: [
            AppComponent,
            MultiplierComponent,
            PlayerComponent,
            BetComponent,
            LoginComponent,
            GameComponent
        ],
        providers: [
            PointsSvc
        ],
        bootstrap:    [ AppComponent ]
    })
];