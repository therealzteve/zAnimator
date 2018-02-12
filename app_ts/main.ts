/// <reference path="../node_modules/@types/easeljs/index.d.ts" />
import loop from './loop';


export function create(canvasId) {
    //let stage = new createjs.Stage(canvasId);
    //loop.init(stage);
    var createjsTickerContainer = {
      execute:function(func, scope){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', func, scope);
      }
    };


    let _loop = new loop(createjsTickerContainer);
    return {
      version: '0.0.1',
      loop: loop
    };
  }
