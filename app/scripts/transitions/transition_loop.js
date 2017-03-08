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

  pulsar.start = function(callback){
    pulsar.callback = callback;
    loop.addAnimation(pulsar.handle);
  };

  pulsar.stop = function(){
    loop.removeAnimation(pulsar.handle);
    pulsar.currentInterval = 0;
  };

  pulsar.handle = function(event){
    pulsar.currentMseconds = pulsar.currentMseconds + event.delta;

    var lastCurrent = pulsar.current;
    pulsar.current = pulsar.calculateCurrent(pulsar.currentMseconds);
    pulsar.increase = (lastCurrent < pulsar.current);
    if(pulsar.callback){
      pulsar.callback(pulsar.current, event);
    }

    intervalPostProcessing();
  };

  pulsar.calculateCurrent = function(ms){
    var relativeCurrent;
    if(pulsar.interval.type === 'ms'){
      relativeCurrent = (ms / pulsar.interval.ms) % 1;
    }
    if(pulsar.interval.type === 'bpm'){
      relativeCurrent = (( ms * pulsar.interval.bpm) / (60000)) % 1;
    }

    if(relativeCurrent <= pulsar.steepness){
      return (relativeCurrent) / pulsar.steepness;
    }else{
      return 1 - (relativeCurrent - pulsar.steepness) / (1 - pulsar.steepness);
    }
  };

  pulsar.getRelativeCurrent = function(factor){

    // First prepare the value which is passed to the calculateCurrent function:
    var factorInMs;
    if(pulsar.interval.type === 'ms'){
      factorInMs = factor * pulsar.interval.ms;
    }
    if(pulsar.interval.type === 'bpm'){
      factorInMs = factor * (60000 / pulsar.interval.bpm);
    }
    var msToCheck = factorInMs + pulsar.currentMseconds;

    if(msToCheck < 0 ){
      if(pulsar.interval.type === 'ms'){
        msToCheck = msToCheck + pulsar.interval.ms * Math.ceil(Math.abs(msToCheck) / pulsar.interval.ms);
      }
      if(pulsar.interval.type === 'bpm'){
        msToCheck = msToCheck + (60000 / pulsar.interval.bpm) * Math.ceil( Math.abs(msToCheck) / (60000 / pulsar.interval.bpm));
      }
    }

    return pulsar.calculateCurrent(msToCheck);
  };

  function intervalPostProcessing(){
    var currentInterval;
    if(pulsar.interval.type === 'ms'){
      currentInterval = Math.floor(pulsar.currentMseconds / pulsar.interval.ms);
    }
    if(pulsar.interval.type === 'bpm'){
      currentInterval = Math.floor(( pulsar.currentMseconds * pulsar.interval.bpm) / (60000));
    }
    if(pulsar.currentInterval < currentInterval){
      pulsar.currentInterval = currentInterval;
      handleIntervalFinished();
    }
  }

  function handleIntervalFinished(){
    if(pulsar.numberOfIntervals > 0){
      if(pulsar.currentInterval === pulsar.numberOfIntervals){
        pulsar.stop();
      }
    }
    if(pulsar.onFinishedInterval){
      pulsar.onFinishedInterval();
    }
  }

  return pulsar;
}

export function risingTransition(time, current, numberOfIntervals, onFinishedInterval){
  return transitionLoop(time, 1, current, numberOfIntervals, onFinishedInterval);
}

export function pulsarTransition(time, current, numberOfIntervals, onFinishedInterval){
  return transitionLoop(time, 0, current, numberOfIntervals, onFinishedInterval);
}

export default transitionLoop;
