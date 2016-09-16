import {pulsarTransition} from '~/transitions/transition_loop';

export default function(subject, speed, limit){
  var linearPulsar = {};
  linearPulsar.subject = subject;
  linearPulsar.speed = speed;
  linearPulsar.limit = limit;
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
