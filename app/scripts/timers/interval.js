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
    halfInterval.type = interval.type;
    halfInterval.bpm = interval.bpm;
    halfInterval.ms = interval.ms;
    halfInterval.divisor = interval.divisor * 2;

    return halfInterval;
  };

  interval.bisect = function(){
    interval.divisor = interval.divisor * 2;
  };

  interval.getMs = function(){
    if(interval.type === 'ms'){
      return interval.ms;
    }else{
      return (60000 / interval.bpm);
    }
  };

  return interval;
}
