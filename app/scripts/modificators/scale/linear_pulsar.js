import loop from '~/loop';

export default function(subject, speed, limit){
  var linearPulsar = {};
  linearPulsar.subject = subject;
  linearPulsar.speed = speed;
  linearPulsar.limit = limit;
  linearPulsar.current = 1;

  if(limit < linearPulsar.current){
    linearPulsar.increment = false;
    linearPulsar.min = limit;
    linearPulsar.max = 1;
  }else{
    linearPulsar.increment = true;
    linearPulsar.min = 1;
    linearPulsar.max = limit;
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
    linearPulsar.subject.scale = linearPulsar.current;
    linearPulsar.subject.draw();
  };

  function handleIncrement(event){
    linearPulsar.current = linearPulsar.current + event.delta / 1000 * speed;
    if(linearPulsar.current >= linearPulsar.max){
      linearPulsar.current = linearPulsar.max;
      linearPulsar.increment = false;
    }
  }

  function handleDecrement(event){
    linearPulsar.current = linearPulsar.current + event.delta / 1000 * speed * (-1);
    if(linearPulsar.current <= linearPulsar.min){
      linearPulsar.current = linearPulsar.min;
      linearPulsar.increment = true;
    }
  }

  return linearPulsar;
}
