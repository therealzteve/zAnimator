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
      var p = incrementProxy({});
      p.group = this.group;
      var timer = this.timer;
      var changePropCallback = function(){
        p.setProp(name, value);
        p.draw();
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
