import {Component} from '@angular/core';
import template from './bet.component.html';
import {PointsSvc} from '../services/pointsSvc'
import './bet.scss';

export class BetComponent {
    constructor(pointsSvc) {
        this.pointsSvc = pointsSvc;
    }

    bet(amount) {
        if (amount > 0 && !this.blockBetting && amount <= this.pointsSvc.obj.points) {
            this.pointsSvc.obj.points -= amount;
            this.pointsSvc.obj.pointsInGame += amount;
        }
    }

    stop(){
        this.pointsSvc.obj.points += (this.pointsSvc.obj.pointsInGame * this.multiplier);
        this.pointsSvc.obj.pointsInGame = 0;
    }

}

BetComponent.annotations = [
    new Component({
        selector: 'bet',
        template: template,
        inputs: [
            'blockBetting',
            'multiplier'
        ]
    })
];
BetComponent.parameters = [
    [PointsSvc]
];