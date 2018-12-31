/// <reference path="../../node_modules/@types/easeljs/index.d.ts" />
import loop from './loop';

let createjsTickerContainer = {
  addCallback:function(func: () => any, scope){
    createjs.Ticker.on('tick', func, scope);
  }
};

let createjsTickerLoop = new loop(createjsTickerContainer);
createjs.Ticker.setFPS(60);

export default createjsTickerLoop;
