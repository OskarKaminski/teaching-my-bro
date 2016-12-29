import {Component} from '@angular/core';
import template from './app.html';

export class AppComponent {

    currentMultiplier(multiplier){
        this.blockBetting = multiplier > 1;
        this.multiplier = multiplier;
    }
}

AppComponent.annotations = [
    new Component({
        selector: 'app',
        template: template
    })
];