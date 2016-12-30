import {GameComponent} from './pages/game/game.component';
import {LoginComponent} from './pages/login/login.component';
import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core';

const routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: GameComponent
    }
    // { path: '**',    component: NoContentComponent },
];

export class AppRouting {
}

AppRouting.annotations = [
    new NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })
];