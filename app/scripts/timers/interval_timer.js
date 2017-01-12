import loop from '~/loop';

export default function(interval){
  var timer = {};
  timer.currentTime = 0;
  timer.interval = interval;
  timer.listeners = [];

  timer.handle = function(event){
    timer.currentTime += event.delta;

    while(timer.currentTime > timer.interval){
       callListeners();
       timer.currentTime -= timer.interval;
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
