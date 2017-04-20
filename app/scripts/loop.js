export default {
    addAnimation: function(handle, scope){
      createjs.Ticker.setFPS(60);
      return createjs.Ticker.on('tick', handle, scope);
    },
    removeAnimation: function(listener){
      createjs.Ticker.off('tick', listener);
    }
};
