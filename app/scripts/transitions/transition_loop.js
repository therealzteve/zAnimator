import loop from '~/loop';

function transitionLoop(interval, steepness, current, numberOfIntervals, onFinishedInterval){
  var pulsar = {};
  pulsar.interval = interval;
  pulsar.currentInterval = 0;
  pulsar.steepness = (typeof steepness !== 'undefined') ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increase = true;
  pulsar.currentMseconds = current ? current * interval.getMs() : 0;
  pulsar.numberOfIntervals = numberOfIntervals ? numberOfIntervals : 0;
  pulsar.onFinishedInterval = onFinishedInterval;
  pulsar._listener = null;

  pulsar.start = function(callback, scope){
    if(this._listener){
      this.stop();
    }
    this.callback = callback;
    this._cbScope = scope;
    this.currentInterval = 0;
    this.currentMseconds = current ? current * this.interval.getMs() : 0;
    this._listener = loop.addAnimation(this.handle, this);
  };

  pulsar.stop = function(){
    loop.removeAnimation(this._listener);
    this._listener = null;
    this.reset();
  };

  pulsar.reset = function(){
    this.current = 0;
    this.increase = true;
    this.currentMseconds = 0;
    this.currentInterval = 0;
  };

  pulsar.handle = function(event){

    // First sum current ms
    this.currentMseconds = this.currentMseconds + event.delta;

    // store current current
    var lastCurrent = this.current;

    // calculate new current
    var newCurrent = this.calculateCurrent(this.currentMseconds);

    // check if interval is finished and set it to 1 if it was the last interval
    newCurrent = this._intervalPostProcessing(newCurrent);

    // calculate current value and compare it with last value
    var currentValue = this.calculateCurrentValue(newCurrent);
    this.increase = (this.calculateCurrentValue(lastCurrent) < currentValue);

    if(this.callback){
      this.callback.call(this._cbScope, currentValue, event);
    }
  };

  pulsar.calculateCurrent = function(ms){
    var relativeCurrent;
    if(this.interval.type === 'ms'){
      relativeCurrent = (ms / this.interval.ms) % 1;
    }
    if(this.interval.type === 'bpm'){
      relativeCurrent = (( ms * this.interval.bpm) / (60000)) % 1;
    }
    return relativeCurrent;
  };

  pulsar.calculateCurrentValue = function(currentToCalculate){
    if(currentToCalculate <= this.steepness){
      return (currentToCalculate) / this.steepness;
    }else{
      return 1 - (currentToCalculate - this.steepness) / (1 - this.steepness);
    }
  };

  pulsar.getRelativeCurrent = function(factor){

    // First prepare the value which is passed to the calculateCurrent function:
    var factorInMs;
    if(this.interval.type === 'ms'){
      factorInMs = factor * this.interval.ms;
    }
    if(this.interval.type === 'bpm'){
      factorInMs = factor * (60000 / this.interval.bpm);
    }
    var msToCheck = factorInMs + this.currentMseconds;

    if(msToCheck < 0 ){
      if(this.interval.type === 'ms'){
        msToCheck = msToCheck + this.interval.ms * Math.ceil(Math.abs(msToCheck) / this.interval.ms);
      }
      if(this.interval.type === 'bpm'){
        msToCheck = msToCheck + (60000 / this.interval.bpm) * Math.ceil( Math.abs(msToCheck) / (60000 / this.interval.bpm));
      }
    }

    return this.calculateCurrentValue(this.calculateCurrent(msToCheck));
  };

  pulsar._intervalPostProcessing = function(tempCurrent){
    var currentInterval;
    if(this.interval.type === 'ms'){
      currentInterval = Math.floor(this.currentMseconds / this.interval.ms);
    }
    if(this.interval.type === 'bpm'){
      currentInterval = Math.floor(( this.currentMseconds * this.interval.bpm) / (60000));
    }
    if(this.currentInterval < currentInterval){
      this.currentInterval = currentInterval;
      return this._handleIntervalFinished(tempCurrent);
    }
    return tempCurrent;
  };

  pulsar._handleIntervalFinished = function(tempCurrent){
    if(this.onFinishedInterval){
        this.onFinishedInterval();
    }
    if(this.numberOfIntervals > 0 && this.currentInterval === this.numberOfIntervals){
        this.stop();
        tempCurrent = 1;
    }
    return tempCurrent;
  };

  return pulsar;
}

export function risingTransition(time, current, numberOfIntervals, onFinishedInterval){
  return transitionLoop(time, 1, current, numberOfIntervals, onFinishedInterval);
}

export function pulsarTransition(time, current, numberOfIntervals, onFinishedInterval){
  return transitionLoop(time, 0, current, numberOfIntervals, onFinishedInterval);
}

export default transitionLoop;
