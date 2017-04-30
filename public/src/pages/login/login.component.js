import {Component} from '@angular/core';
import template from './login.component.html';
import './login.scss';
import {AngularFire, AuthMethods, AuthProviders} from 'angularfire2';

export class LoginComponent {

    constructor(af){
        this.af = af;
    }
    login(){
        console.log(this.email);
        this.af.auth.login({
            email: this.email,
            password: this.haslo
        }, {
            method: AuthMethods.Password
        }).catch(()=>{
            this.af.auth.createUser({
                email: this.email,
                password: this.haslo
            })
        });

    }
}

LoginComponent.annotations = [
    new Component({
        selector: 'login',
        template: template
    })
];

LoginComponent.parameters = [
    [AngularFire]
];