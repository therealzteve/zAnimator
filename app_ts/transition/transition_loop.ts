import { Interval } from "../timer/interval";
import CallbackSupport from "../internal/callback_support";
import loopService from "../loop/loop.service";
import calculateTransitionStep from './calculate_transition_step';
import linearFunc from './functions/linear';

export default class extends CallbackSupport<number> {

    private interval: Interval;
    private _currentStep: number = 0;
    private steepness = 0.5;
    private currentMs = 0;
    private transitionFunc: (currentMs: number) => number;

    constructor(interval: Interval, transitionFunc?: (currentMs: number) => number){
      super();
      this.interval = interval;
      if(transitionFunc){
        this.transitionFunc = transitionFunc;
      }else{
        this.transitionFunc = linearFunc(interval, this.steepness);
      }
    }

    public handleTransition(event){
      // First sum current ms
      this.currentMs = this.currentMs + event.delta;

      // calculate new current
      this._currentStep = this.transitionFunc(this.currentMs);

      this.handle(this._currentStep);
    }

    public start(){
        loopService.loop.addAnimation(this.handleTransition, this);
    }

    public stop(){
      loopService.loop.removeAnimation(this.handleTransition);
    }

}
