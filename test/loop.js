"use strict";
/// <reference path="../node_modules/@types/easeljs/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
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
var loop = /** @class */ (function () {
    function loop(ticker) {
        this._registeredComponents = [];
        this.ticker = ticker;
        this.ticker.execute(this._handle, this);
    }
    loop.prototype._handle = function () {
        for (var _i = 0, _a = this._registeredComponents; _i < _a.length; _i++) {
            var component = _a[_i];
            component.draw();
        }
    };
    loop.prototype.addComponent = function (component) {
        this._registeredComponents.push(component);
    };
    return loop;
}());
exports.default = loop;
