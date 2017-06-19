import checkParameter from '~/internal/check_parameter';
import absolutePulse from './absolute_pulse';
import relativePulse from './relative_pulse';

export default function(options){

  checkParameter(options, 'interval', true);
  checkParameter(options, 'relative', false, false);
  options.speed = 0;

  var intervalPulse = {};
  intervalPulse.interval = options.interval;
  intervalPulse.relative = options.relative;
  if(intervalPulse.relative){
    intervalPulse._internalPulse = relativePulse(options);
  }else{
    intervalPulse._internalPulse = absolutePulse(options);
  }

  intervalPulse.pulse = function(amount){
    if(this.relative){
      this._internalPulse._absolutePulse.speed = Math.abs((amount * (this._internalPulse.end - this._internalPulse._absolutePulse.begin))) / (this.interval.getMs() / 1000);
    }else{
      this._internalPulse.speed = Math.abs(amount - this._internalPulse.begin) / (this.interval.getMs() / 1000);
    }
    this._internalPulse.pulse(amount);
  };

  return intervalPulse;
}
