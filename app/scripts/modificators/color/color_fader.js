import loop from '~/loop';
import color from 'color';

export default function(subject, speed, color1, color2){
  var linearPulsar = {};
  linearPulsar.subject = subject;
  linearPulsar.speed = speed;
  linearPulsar.color1 = color(color1);
  linearPulsar.color2 = color(color2);
  linearPulsar.currentColor = color(color1);
  linearPulsar.current = 0;


  linearPulsar.increment = true;
  linearPulsar.min = 0;
  linearPulsar.max = 1;

  linearPulsar.colorRange = {
    r: linearPulsar.color2.red() - linearPulsar.color1.red(),
    g: linearPulsar.color2.green() - linearPulsar.color1.green(),
    b: linearPulsar.color2.blue() - linearPulsar.color1.blue()
  };

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
    linearPulsar.currentColor.red(linearPulsar.color1.red() + linearPulsar.current * linearPulsar.colorRange.r);
    linearPulsar.currentColor.green(linearPulsar.color1.green() + linearPulsar.current * linearPulsar.colorRange.g);
    linearPulsar.currentColor.blue(linearPulsar.color1.blue() + linearPulsar.current * linearPulsar.colorRange.b);
    linearPulsar.subject.color = linearPulsar.currentColor.rgbString();
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
