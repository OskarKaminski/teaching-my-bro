import {Component} from '@angular/core';
import template from './game.component.html';
import './game.scss';

export class GameComponent {

    currentMultiplier(multiplier){
        this.blockBetting = multiplier > 1;
        this.multiplier = multiplier;
    }
}

GameComponent.annotations = [
    new Component({
        selector: 'game',
        template: template
    })
];