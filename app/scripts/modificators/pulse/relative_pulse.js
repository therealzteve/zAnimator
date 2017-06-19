import checkParameter from '~/internal/check_parameter';
import absolutePulse from './absolute_pulse';

export default function(options){

  checkParameter(options, 'end', true);

  var restartPulse = {};
  restartPulse.end = options.end;
  restartPulse._absolutePulse = absolutePulse(options);

  restartPulse.pulse = function(amount){
    this._absolutePulse.pulse(this._absolutePulse.begin + (this.end - this._absolutePulse.begin) * amount);
  };

  return restartPulse;
}
