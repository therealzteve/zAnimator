import loop from '~/loop';

export default function(interval){
  var timer = {};
  timer.currentTime = 0;
  timer.interval = interval;
  timer.listeners = [];

  timer.handle = function(event){
    this.currentTime += event.delta;

    while(this.currentTime > this.interval){
       this._callListeners();
       this.currentTime -= this.interval;
    }
  };

  timer.addListener = function(listener){
    this.listeners.push(listener);
  };

  timer.removeListener = function(listener){
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  };

  timer.start = function(){
    loop.addAnimation(this.handle);
  };

  timer.stop = function(){
    loop.removeAnimation(this.handle);
  };

  timer._callListeners = function(){
    for(var listener of this.listeners){
      listener();
    }
  };

  return timer;
}
