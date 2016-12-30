import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoggedUserComponent} from './logged-user.component';

const routes = [
    {
        path: '',
        component: LoggedUserComponent,
        children: [
            {
                path: '',
                children: [
                    {path: '', component: DashboardPage}
                ]
            }
        ]
    }
];

export class LoggedRoutingModule {
}

LoggedRoutingModule.annotations = [
    new NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [
            RouterModule
        ]
    })
];