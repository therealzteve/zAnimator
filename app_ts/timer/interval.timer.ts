import CallbackSupport from '../internal/callback_support';
import loopService from '../loop/loop.service';
import { Interval } from './interval';


export default class IntervalTimer extends CallbackSupport<any> {

    public interval: Interval;
    public currentMs: number;
    public currentStep: number;

    constructor(interval: Interval){
      super();
      this.interval = interval;
    }

    public start(){
      loopService.loop.addAnimation(this._handleInterval, this);
    }

    public stop(){
      loopService.loop.removeAnimation(this._handleInterval);
    }

    private _handleInterval(event){
      this.currentMs = this.currentMs + event.delta;
      var stepBeforeDelta = this.currentStep;
      this.currentStep = Math.floor((this.currentMs / this.interval.getMs()));

      while(stepBeforeDelta < this.currentStep){
        stepBeforeDelta++;
        this.handle();
      }
    }
}
