import checkParameter from '~/internal/check_parameter';
import intervalPulse from '~/modificators/pulse/interval_pulse';

export default function(options){

  checkParameter(options, 'soundBar', true);
  checkParameter(options, 'interval', true);

  var pulseSoundBar = {};
  pulseSoundBar.soundBar = options.soundBar;
  pulseSoundBar.interval = options.interval;
  pulseSoundBar.intervalPulse = intervalPulse({interval: pulseSoundBar.interval, subject: pulseSoundBar.soundBar, property: 'current', begin: 0, end: 1});

  pulseSoundBar.pulse = function(amount){
    this.intervalPulse.pulse(amount);
  };

  pulseSoundBar.view = pulseSoundBar.soundBar.view;

  return pulseSoundBar;

}
