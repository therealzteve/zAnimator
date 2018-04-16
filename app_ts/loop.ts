/// <reference path="../node_modules/@types/easeljs/index.d.ts" />

class loop {

  private ticker: {addCallback: {(func, scope): void;} }
  private _registeredComponents = [];
  private _registeredCallbacks = [];

  constructor(ticker:   {addCallback: {(func, scope): void;} } ){
    this.ticker = ticker;
    this.ticker.addCallback(this._handle, this);
  }

  private _handle(event){
    for(var callback of this._registeredCallbacks){
      callback.cb.call(callback.scope, event);
    }

    for(var component of this._registeredComponents){
      component.draw();
    }
  }

  public addComponent(component: { draw: {():void;} }){
    this._registeredComponents.push(component);
  }

  public addAnimation(handle, scope){
       var callback = {
         cb: handle,
         scope: scope
       };
       this._registeredCallbacks.push(callback);
       return callback;
  }

}

export default loop;
