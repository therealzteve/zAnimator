import copy from '~/internal/copy';

export default function(){

  /* private vars */
  var abstractComponent = {};
  abstractComponent._callbacks = {};

  abstractComponent.addEventListener = function(eventName, callback, scope){
    if(!this._callbacks[eventName]){
      this._callbacks[eventName] = [];
    }
    var listener = { callback: callback, scope: scope};
    this._callbacks[eventName].push(listener);
    return listener;
  };

  abstractComponent.removeEventListener = function(eventName, listener){
      if(this._callbacks[eventName]){
        var index = this._callbacks[eventName].indexOf(listener);
        if(index > -1){
          this._callbacks.splice(index, 1);
        }

      }
  };

  abstractComponent.sendEvent = function(eventName){
    if(!this._callbacks[eventName]){
      return;
    }
    for(var callback of this._callbacks[eventName]){
      callback.callback.call(callback.scope);
    }
  };

  abstractComponent.getCopy = function(){
    return copy(this);
  };

  return abstractComponent;
}
