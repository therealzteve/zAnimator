export default function(){

  /* private vars */
  var abstractComponent = {};
  var callbacks = {};

  abstractComponent.addEventListener = function(eventName, callback){
    if(!callbacks[eventName]){
      callbacks[eventName] = [];
    }
    callbacks[eventName].push(callback);
  };

  abstractComponent.removeEventListener = function(eventName, callback){
      if(callbacks[eventName]){
        var index = callbacks[eventName].indexOf(callback);
        if(index > -1){
          callbacks.splice(index, 1);
        }

      }
  };

  abstractComponent.sendEvent = function(eventName){
    if(!callbacks[eventName]){
      return;
    }
    for(var callback of callbacks[eventName]){
      callback();
    }
  };

  return abstractComponent;
}
