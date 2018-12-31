import { Interval } from "../timer/interval";
import CallbackSupport from "../internal/callback_support";
import loopService from "../loop/loop.service";
import calculateTransitionStep from './calculate_transition_step';


export default class extends CallbackSupport<number> {

    private interval: Interval;
    private _currentStep: number = 0;
    private steepness = 0.5;
    private currentMs = 0;

    constructor(interval: Interval){
      super();
      this.interval = interval;
    }

    public handleTransition(event){
      // First sum current ms
      this.currentMs = this.currentMs + event.delta;

      // calculate new current
      this._currentStep = calculateTransitionStep(this.interval, this.currentMs, this.steepness);

      this.handle(this._currentStep);
    }

    public start(){
        loopService.loop.addAnimation(this.handleTransition, this);
    }

    public stop(){
      loopService.loop.removeAnimation(this.handleTransition);
    }

    private calculateCurrent(ms){
      return (ms /this.interval.getMs()) % 1;
    };

    private calculateCurrentValue(currentToCalculate){
      if(currentToCalculate <= this.steepness){
        return (currentToCalculate) / this.steepness;
      }else{
        return 1 - (currentToCalculate - this.steepness) / (1 - this.steepness);
      }
    };
}
