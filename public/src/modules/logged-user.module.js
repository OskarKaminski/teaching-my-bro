import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';
import { FormsModule }   from '@angular/forms';

//Components

//Pages
import {LoggedUserComponent} from './logged-user.component';

//Routing
import {LoggedRoutingModule} from './logged-user.routes';

export class LoggedUserModule {
    constructor() {
    }
}

LoggedUserModule.annotations = [
    new NgModule({
        imports: [
            CommonModule,
            FormsModule,
            LoggedRoutingModule
        ],
        declarations: [
            LoggedUserComponent
        ],
        providers: []
    })
];
