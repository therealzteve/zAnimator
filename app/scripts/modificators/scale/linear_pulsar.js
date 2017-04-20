import { pulsarTransition, risingTransition } from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'limit', true);
  checkParameter(options, 'numberOfIntervals', false);
  checkParameter(options, 'rising', false, true);
  checkParameter(options, 'centerIfPossible', false, true);


  var linearPulsar = {};
  linearPulsar.subject = options.subject;
  linearPulsar.speed = options.speed;
  linearPulsar.limit = options.limit;
  if(!options.rising){
    linearPulsar.pulsar = pulsarTransition(linearPulsar.speed, 0, options.numberOfIntervals);
  }else{
    linearPulsar.pulsar = risingTransition(linearPulsar.speed, 0, options.numberOfIntervals);
  }

  linearPulsar.start = function(){
    this.pulsar.start(this.handle, this);
  };

  linearPulsar.stop = function(){
    this.pulsar.stop();
  };

  linearPulsar.handle = function(current){
    setProp(this.subject, 'scale', 1 + current * (this.limit - 1));
    this.subject.draw();
  };

  return linearPulsar;
}
