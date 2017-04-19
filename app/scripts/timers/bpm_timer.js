import loop from '~/loop';

export default function(bpm){
  var timer = {};
  timer.currentTime = 0;
  timer.bpm = bpm;
  timer.currentBpmSlot = -1;
  timer.listeners = [];


  timer.handle = function(event){
    this.currentTime += event.delta;

    if( Math.floor(this.currentTime / this.bpm) > this.currentBpmSlot){
       this._callListeners();
       this.currentBpmSlot = Math.floor(this.currentTime / this.bpm);
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
