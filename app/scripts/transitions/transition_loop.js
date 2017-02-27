import loop from '~/loop';


function transitionLoop(interval, steepness, current){
  var pulsar = {};
  pulsar.interval = interval;
  pulsar.steepness = (typeof steepness !== 'undefined') ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increase = true;
  pulsar.currentMseconds = current ? current * interval.getMs() : 0;



  pulsar.start = function(callback){
    pulsar.callback = callback;
    loop.addAnimation(pulsar.handle);
  };

  pulsar.stop = function(){
    loop.removeAnimation(pulsar.handle);
  };

  pulsar.handle = function(event){
    pulsar.currentMseconds = pulsar.currentMseconds + event.delta;

    var lastCurrent = pulsar.current;
    pulsar.current = pulsar.calculateCurrent(pulsar.currentMseconds);
    pulsar.increase = (lastCurrent < pulsar.current);
    if(pulsar.callback){
      pulsar.callback(pulsar.current, event);
    }
  };

  pulsar.calculateCurrent = function(ms){
    var relativeCurrent;
    if(pulsar.interval.type === 'ms'){
      relativeCurrent = (ms / pulsar.interval.time) % 1;
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

  return pulsar;
}

export function risingTransition(time, current){
  return transitionLoop(time, 1, current);
}

export function pulsarTransition(time, current){
  return transitionLoop(time, 0, current);
}

export default transitionLoop;
