import intervalTimer from '~/timers/interval_timer';
import checkParameter from '~/internal/check_parameter';
import incrementProxy from './increment_proxy';
import abstractProxy from './abstract_proxy';

export default function(options){

  checkParameter(options, 'interval', true);

  var proxy = abstractProxy();
  proxy.interval = options.interval;
  proxy.timer = intervalTimer(proxy.interval);

  proxy.setProp = function(name, value){
    this._interval(function(p){
      p.setProp(name, value);
      p.draw();
    });
  };

  proxy.run = function(func){

    this._interval( function(p){
      p.run(func);
    });
  };

  proxy._interval = function(action){
    var p = incrementProxy({});
    p.group = this.group;
    var timer = this.timer;
    var changePropCallback = function(){

      action(p);
      if(p.currentElementIndex === 0){
        timer.removeListener(changePropCallback);
        p.group = null;
      }
    };
    this.timer.addListener(changePropCallback);
  };

  proxy.timer.start();
  return proxy;
}
