import {Component} from '@angular/core';
import template from './player.component.html';
import {PointsSvc} from '../services/pointsSvc';
import './player.scss';

export class PlayerComponent {
    constructor(pointsSvc){
        this.name = 'Oliver';
        this.obj = pointsSvc.obj;
    }

    ngOnInit(){
    }


}

PlayerComponent.annotations = [
    new Component({
        selector: 'player',
        template: template
    })
];
PlayerComponent.parameters = [
    [PointsSvc]
];