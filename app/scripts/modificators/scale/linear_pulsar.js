import {pulsarTransition} from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'limit', true);

  var linearPulsar = {};
  linearPulsar.subject = options.subject;
  linearPulsar.speed = options.speed;
  linearPulsar.limit = options.limit;
  linearPulsar.pulsar = pulsarTransition(linearPulsar.speed);

  linearPulsar.start = function(){
    linearPulsar.pulsar.start(linearPulsar.handle);
  };

  linearPulsar.stop = function(){
    linearPulsar.pulsar.stop();
  };

  linearPulsar.handle = function(current){
    linearPulsar.subject.scale = 1 + current * linearPulsar.limit;
    linearPulsar.subject.draw();
  };

  return linearPulsar;
}
