define(function(){
  'use strict';
  return {
    addAnimation: function(handle){
      createjs.Ticker.addEventListener('tick', handle);
    },
    removeAnimation: function(handle){
      createjs.Ticker.removeEventListener('tick', handle);
    }
  };
});
