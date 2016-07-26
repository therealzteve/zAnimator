import loop from '~/loop';
import { easeInOutExpo } from 'easing-utils';

export default function(subject, speed, limit){
  var linearPulsar = {};
  linearPulsar.subject = subject;
  linearPulsar.speed = speed;
  linearPulsar.limit = limit;
  linearPulsar.current = 1;

  if(limit < linearPulsar.current){
    linearPulsar.increment = false;
    linearPulsar.progress = 1;
  }else{
    linearPulsar.increment = true;
    linearPulsar.progress = 0;
  }

  linearPulsar.start = function(){
    loop.addAnimation(linearPulsar.handle);
  };

  linearPulsar.stop = function(){
    loop.removeAnimation(linearPulsar.handle);
  };

  linearPulsar.handle = function(event){
    if(linearPulsar.increment){
      handleIncrement(event);
    }else{
      handleDecrement(event);
    }
    linearPulsar.subject.scale = 1 + easeInOutExpo(linearPulsar.progress) * (linearPulsar.limit - 1);
    linearPulsar.subject.draw();
  };

  function handleIncrement(event){
    linearPulsar.progress = linearPulsar.progress + (event.delta / 1000) * (speed / (linearPulsar.limit - 1));
    if(linearPulsar.progress >= 1){
      linearPulsar.progress = 1;
      linearPulsar.increment = false;
    }
  }

  function handleDecrement(event){
    linearPulsar.progress = linearPulsar.progress - (event.delta / 1000) * (speed / (linearPulsar.limit - 1));
    if(linearPulsar.progress <= 0){
      linearPulsar.progress = 0;
      linearPulsar.increment = true;
    }
  }

  return linearPulsar;
}
