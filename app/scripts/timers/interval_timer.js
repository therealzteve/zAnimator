import loop from '~/loop';

export default function(interval){
  var timer = {};
  timer.currentTime = 0;
  timer.interval = interval;
  timer.listeners = [];
  timer._listener = null;

  timer.handle = function(event){
    this.currentTime += event.delta;

    while(this.currentTime > this.interval){
       this._callListeners();
       this.currentTime -= this.interval;
    }
  };

  timer.addListener = function(callback, scope){
    var listener = { callback: callback, scope: scope };
    this.listeners.push(listener);
    return listener;
  };

  timer.removeListener = function(listener){
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  };

  timer.start = function(){
    this._listener = loop.addAnimation(this.handle, this);
  };

  timer.stop = function(){
    loop.removeAnimation(this._listener);
  };

  timer._callListeners = function(){
    for(var listener of this.listeners){
      listener.callback.call(listener.scope);
    }
  };

  return timer;
}
