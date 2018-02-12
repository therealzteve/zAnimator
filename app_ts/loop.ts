/// <reference path="../node_modules/@types/easeljs/index.d.ts" />

// let loop = {
//   _registeredComponents: [],
//   _registeredCallbacks: [],
//   addAnimation: function(handle, scope){
//     var callback = {
//       cb: handle,
//       scope: scope
//     };
//     this._registeredCallbacks.push(callback);
//     return callback;
//   },
//   removeAnimation: function(listener){
//     if(this._registeredCallbacks.indexOf(listener) !== -1){
//       this._registeredCallbacks.splice(this._registeredCallbacks.indexOf(listener), 1);
//     }
//   },
//   addComponent: function(component){
//     this._registeredComponents.push(component);
//   },
//   removeComponent: function(component){
//     if(this._registeredComponents.indexOf(component) !== -1){
//       this._registeredComponents.splice(this._registeredComponents.indexOf(component), 1);
//     }
//   },
//   init: function(stage: createjs.Stage){
//     console.log('init!');
//     createjs.Ticker.setFPS(60);
//     createjs.Ticker.on('tick', loop._handle, loop);
//     createjs.Ticker.on('tick', stage.update);
//   },
//   _handle: function(event){
//     for(var callback of this._registeredCallbacks){
//       callback.cb.call(callback.scope, event);
//     }
//     for(var component of this._registeredComponents){
//       component.draw();
//     }
//   }
// };
// console.log('whaaat');
// export default loop;


class loop {

  private ticker: {execute: {(func, scope): void;} }
  private _registeredComponents = [];

  constructor(ticker:   {execute: {(func, scope): void;} } ){
    this.ticker = ticker;
    this.ticker.execute(this._handle, this);
  }

  private _handle(){
    for(var component of this._registeredComponents){
          component.draw();
    }
  }

  public addComponent(component: { draw: {():void;} }){
    this._registeredComponents.push(component);
  }

}

export default loop;
