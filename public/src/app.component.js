import {Component} from '@angular/core';
import template from './app.html';
import './app.scss';

export class AppComponent {
}

AppComponent.annotations = [
    new Component({
        selector: 'app',
        template: template
    })
];