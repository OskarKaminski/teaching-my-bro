import {Component} from '@angular/core';
import template from './player.component.html';
import {PointsSvc} from '../services/pointsSvc';
import {AngularFire} from 'angularfire2';
import './player.scss';

export class PlayerComponent {
    constructor(pointsSvc, af){
        af.auth.subscribe(user =>{
            console.log(user)
            this.name = user.auth.email;
        });
        // this.name = 'Oliver';
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
    [PointsSvc],
    [AngularFire]
];