import {pulsarTransition} from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'limit', true);
  checkParameter(options, 'numberOfIntervals', false);

  var linearPulsar = {};
  linearPulsar.subject = options.subject;
  linearPulsar.speed = options.speed;
  linearPulsar.limit = options.limit;
  linearPulsar.pulsar = pulsarTransition(linearPulsar.speed, 0, options.numberOfIntervals);

  linearPulsar.start = function(){
    linearPulsar.pulsar.start(linearPulsar.handle);
  };

  linearPulsar.stop = function(){
    linearPulsar.pulsar.stop();
  };

  linearPulsar.handle = function(current){
    setProp(linearPulsar.subject, 'scale', 1 + current * linearPulsar.limit);
    linearPulsar.subject.draw();
  };

  return linearPulsar;
}
