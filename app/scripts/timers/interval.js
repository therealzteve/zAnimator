import checkParameter from '~/internal/check_parameter';

export default function(options){
  var interval = {};

  checkParameter(options, 'type', true);
  checkParameter(options, 'bpm', false, 0);
  checkParameter(options, 'ms', false, 0);
  checkParameter(options, 'divisor', false, 1);

  interval.type = options.type;
  interval.bpm = options.bpm;
  interval.ms = options.ms;
  interval.divisor = options.divisor;

  if(interval.bpm === 0 && interval.ms === 0 ){
    throw 'Illegal state: BPM and MS cannot both be 0';
  }

  interval.generateHalfInterval = function(){
    var halfInterval = {};
    halfInterval.type = this.type;
    halfInterval.bpm = this.bpm;
    halfInterval.ms = this.ms;
    halfInterval.divisor = this.divisor * 2;

    return halfInterval;
  };

  interval.bisect = function(){
    this.divisor = this.divisor * 2;
  };

  interval.getMs = function(){
    if(this.type === 'ms'){
      return this.ms;
    }else{
      return (60000 / this.bpm);
    }
  };

  return interval;
}
