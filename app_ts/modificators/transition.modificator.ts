import Modificator, { Subject } from './modificator.interface';
import {ComponentInterface} from '../components/component.interface';
import TransitionLoop from '../transition/transition_loop';
import {Interval} from '../timer/interval';

export default class implements Modificator {

    public min: number;
    public max: number;
    public changeProbability:number = 1;

    public subjects: Array<Subject<any>> = [];

    public transitionLoop;

    constructor(min: number, max: number, interval: Interval, transitionFunc?: (ms:number) => number){
      this.min = min;
      this.max = max;
      this.transitionLoop = new TransitionLoop(interval, transitionFunc);
      this.transitionLoop.addCallback((progress:number) => { this.handle(progress) });
    }

    public handle( progress: number):void {
      if(Math.random() < this.changeProbability){
        for(let subject of this.subjects){
          subject.subject[subject.property] = <any>this.min + this.max * progress;
        }
      }
    }

    public start(){
      this.transitionLoop.start();
    }

    public stop(){
      this.transitionLoop.stop();
    }
}
