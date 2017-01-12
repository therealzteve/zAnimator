import loop from '~/loop';


function transitionLoop(time, steepness, current){
  var pulsar = {};
  pulsar.time = time;
  pulsar.steepness = (typeof steepness !== 'undefined') ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increase = true;
  pulsar.currentMseconds = current ? current * time : 0;



  pulsar.start = function(callback){
    pulsar.callback = callback;
    loop.addAnimation(pulsar.handle);
  };

  pulsar.stop = function(){
    loop.removeAnimation(pulsar.handle);
  };

  pulsar.handle = function(event){
    pulsar.currentMseconds = pulsar.currentMseconds + event.delta;

    var limitTimeFactor = Math.floor(pulsar.currentMseconds / pulsar.time);

    pulsar.currentMseconds = pulsar.currentMseconds - pulsar.time * limitTimeFactor;
    var lastCurrent = pulsar.current;
    pulsar.current = pulsar.calculateCurrent(pulsar.currentMseconds);
    pulsar.increase = (lastCurrent < pulsar.current);
    if(pulsar.callback){
      pulsar.callback(pulsar.current, event);
    }
  };

  pulsar.calculateCurrent = function(ms){
    var relativeCurrent = ms / pulsar.time;
    if(relativeCurrent <= pulsar.steepness){
      return (relativeCurrent) / pulsar.steepness;
    }else{
      return 1 - (relativeCurrent - pulsar.steepness) / (1 - pulsar.steepness);
    }
  };

  pulsar.getRelativeCurrent = function(factor){

    // First prepare the value which is passed to the calculateCurrent function:
    var factorInMs = factor * pulsar.time;
    var msToCheck = factorInMs + pulsar.currentMseconds;

    if(msToCheck < 0 ){
      // When msToCheck is negative, we subtract the last part smaller
      // than the pulsar time from the pulsar time (with modulo)
      // e.g.: msToCheck = -33, time = 10
      // --> new msToCheck is 10 - 3 = 7
      msToCheck = pulsar.time - (((Math.abs(msToCheck) / pulsar.time) % 1) * pulsar.time);
    }else{
      // If msToCheck is positive, we only have to check values greater than time
      var limitTimeFactor = Math.floor(msToCheck / pulsar.time);
      msToCheck = msToCheck - pulsar.time * limitTimeFactor;
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
