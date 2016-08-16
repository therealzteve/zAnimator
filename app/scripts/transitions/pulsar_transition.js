import loop from '~/loop';


export default function(time, steepness, current){
  var pulsar = {};
  pulsar.time = time;
  pulsar.steepness = (typeof steepness !== 'undefined') ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increment = true;
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

    var limitTimeFactor = Math.floor(pulsar.currentMseconds  / pulsar.time);

    pulsar.currentMseconds = pulsar.currentMseconds - pulsar.time * limitTimeFactor;

    var relativeCurrent = pulsar.currentMseconds / pulsar.time;
    if(relativeCurrent <= pulsar.steepness){
      pulsar.current = (relativeCurrent) / pulsar.steepness;
    }else{
      pulsar.current = 1 - (relativeCurrent - pulsar.steepness) / (1 - pulsar.steepness);
    }

    if(pulsar.callback){
      pulsar.callback(pulsar.current, event);
    }
  };

  return pulsar;
}
