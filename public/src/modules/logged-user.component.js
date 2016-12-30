import {Component} from '@angular/core';
import '../pages/app/app.scss';
import {Users} from 'Services/users'

export class LoggedUserComponent {
    constructor(users){
        this._users = users;
    }

    ngOnInit() {
        this.currentUserObservable = this._users.currentUser
            .subscribe(user => {
                this.currentUser = user;
            });
    }

    ngOnDestroy() {
        this.currentUserObservable.unsubscribe();
    }
}

LoggedUserComponent.annotations = [
    new Component({
        selector: 'logged',
        template: `
            <navbar [user]="currentUser"></navbar>
            <div id="page-wrapper">
                <router-outlet></router-outlet>
            </div>`
    })
];

LoggedUserComponent.parameters = [
    [Users]
];