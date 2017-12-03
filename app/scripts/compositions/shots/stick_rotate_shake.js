import checkParameter from '~/internal/check_parameter';
import component from '~/abstract_component';
import container from '~/factories/createjs/components/container';
import rotationSwinger from '~/modificator/rotation/rotation_swinger';

export default function(options){

  checkParameter(options, 'length', true);
  checkParameter(options, 'range', true);
  checkParameter(options, 'shakeTime', true); // As an interval object
  checkParameter(options, 'thickness', true); // As an interval object

  var stickRotateShake = component();
  stickRotateShake.length = options.length;
  stickRotateShake.range = options.range;
  stickRotateShake.shakeTime = options.shakeTime;
  stickRotateShake.thickness = options.thickness;
  stickRotateShake.view = container();
  stickRotateShake.swinger = rotationSwinger({subject: stickRotateShake.view, range: 0});
  stickRotateShake.intervalPulse = intervalPulse({interval: stickRotateShake.shakeTime, subject: stickRotateShake.swinger, property: 'range', begin: 0, end: stickRotateShake.shake});

  stickRotateShake.pulse = function(){
    this.intervalPulse.pulse(1);
    this.swinger.start();
  };

  return stickRotateShake;
}
