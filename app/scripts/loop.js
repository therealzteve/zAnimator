createjs.Ticker.setFPS(60);

var loop = {
  _registeredComponents: [],
  _registeredCallbacks: [],
  addAnimation: function(handle, scope){
    return createjs.Ticker.on('tick', handle, scope);
  },
  removeAnimation: function(listener){
    createjs.Ticker.off('tick', listener);
  },
  addComponent: function(component){
    this._registeredCallbacks.push(component);
  },
  removeComponent: function(component){
    console.log(component);
  },
  _handle: function(event){
    for(var callback of this._registeredCallbacks){
      callback.cb.call(this, event);
    }
    for(var component of this._registeredComponents){
      component.draw();
    }
  }
};

createjs.Ticker.on('tick', loop._handle, loop);

export default loop;
