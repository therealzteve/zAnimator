import intervalTimer from './interval_timer';


export default {
  run: function(callback, scope, interval){
    var it = intervalTimer(interval);

    var cbObject = {
      cb: function(){
        callback.call(scope);
        it.destroy();
      }
    };
    it.addListener(cbObject.cb, cbObject);

    it.start();
  }
};
