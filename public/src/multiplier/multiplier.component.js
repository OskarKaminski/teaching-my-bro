import {Component, EventEmitter} from '@angular/core';
import template from './multiplier.component.html';
import {PointsSvc} from '../services/pointsSvc';
import './multiplier.scss';

export class MultiplierComponent {
    constructor(pointsSvc){
        this.name = 'Oliver';
        this.currentMultiplier = new EventEmitter();
        this.pointsSvc = pointsSvc;
    }

    ngOnInit(){
        this.restartGame();
    }

    restartGame(){
        this._multiplier = 1;
        this.timeout = 10;
        this.timeoutID = setInterval(this.timeouting.bind(this), 1000);
    }

    get multiplier(){
        return this._multiplier.toFixed(2);
    }

    runMultiplayer(){
        this.crashTime = this.getRandomCrashTime();
        this.intervalID = setInterval(this.increaseMultiplier.bind(this), 100);

    }

    timeouting(){
        this.timeout -= 1;
        if(this.timeout == 0) {
            clearInterval(this.timeoutID);
            this.runMultiplayer();

        }
    }

    increaseMultiplier(){
        this._multiplier += 0.01;
        this.currentMultiplier.next(this.multiplier);
        if(this.multiplier == this.crashTime){
            clearInterval(this.intervalID);
            this.pointsSvc.obj.pointsInGame = 0;
            this.currentMultiplier.next(1);
            this.restartGame();
        }
    }

    getRandomCrashTime(){
        const randomCrashTime = (Math.random() * 9 + 1).toFixed(2);
        console.log(randomCrashTime);
        return randomCrashTime;
    }
}

MultiplierComponent.annotations = [
    new Component({
        selector: 'multiplier',
        template: template,
        outputs: [
            'currentMultiplier'
        ]
    })
];
MultiplierComponent.parameters = [
    [PointsSvc]
];