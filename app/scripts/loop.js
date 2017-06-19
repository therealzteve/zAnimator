let loop = {
  _registeredComponents: [],
  _registeredCallbacks: [],
  addAnimation: function(handle, scope){
    var callback = {
      cb: handle,
      scope: scope
    };
    this._registeredCallbacks.push(callback);
    return callback;
  },
  removeAnimation: function(listener){
    if(this._registeredCallbacks.indexOf(listener) !== -1){
      this._registeredCallbacks.splice(this._registeredCallbacks.indexOf(listener), 1);
    }
  },
  addComponent: function(component){
    this._registeredComponents.push(component);
  },
  removeComponent: function(component){
    if(this._registeredComponents.indexOf(component) !== -1){
      this._registeredComponents.splice(this._registeredComponents.indexOf(component), 1);
    }
  },
  init: function(stage){
    console.log('init!');
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on('tick', loop._handle, loop);
    createjs.Ticker.on('tick', stage);
  },
  _handle: function(event){
    for(var callback of this._registeredCallbacks){
      callback.cb.call(callback.scope, event);
    }
    for(var component of this._registeredComponents){
      component.draw();
    }
  }
};
console.log('whaaat');
export default loop;
