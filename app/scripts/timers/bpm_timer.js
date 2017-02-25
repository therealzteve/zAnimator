import loop from '~/loop';

export default function(bpm){
  var timer = {};
  timer.currentTime = 0;
  timer.bpm = bpm;
  timer.currentBpmSlot = -1;
  timer.listeners = [];


  timer.handle = function(event){
    timer.currentTime += event.delta;

    if( Math.floor(timer.currentTime / timer.bpm) > timer.currentBpmSlot){
       callListeners();
       timer.currentBpmSlot = Math.floor(timer.currentTime / timer.bpm);
    }

  };

  timer.addListener = function(listener){
    timer.listeners.push(listener);
  };

  timer.removeListener = function(listener){
    timer.listeners.splice(timer.listeners.indexOf(listener), 1);
  };

  timer.start = function(){
    loop.addAnimation(timer.handle);
  };

  timer.stop = function(){
    loop.removeAnimation(timer.handle);
  };

  function callListeners(){
    for(var listener of timer.listeners){
      listener();
    }
  }

  return timer;
}
