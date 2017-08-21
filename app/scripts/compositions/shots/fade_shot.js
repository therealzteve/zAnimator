import checkParameter from '~/internal/check_parameter';
import intervalPulse from '~/modificators/pulse/interval_pulse';
import singleChildFilter from '~/filters/single_child_filter';
import abstractFilter from '~/filters/abstract_filter';

export default function(options){

  checkParameter(options, 'child', true);
  checkParameter(options, 'interval', true);

  var pulseFader = singleChildFilter(abstractFilter(), options);
  pulseFader.interval = options.interval;
  pulseFader.view.alpha = 0;
  pulseFader.intervalPulse = intervalPulse({interval: pulseFader.interval, subject: pulseFader.view, property: 'alpha', begin: 0, end: 1});

  pulseFader.pulse = function(amount){
    if(typeof amount === 'undefined'){
      amount = 1;
    }
    this.intervalPulse.pulse(amount);
  };


  return pulseFader;
}
