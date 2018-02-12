import checkParameter from '~/internal/check_parameter';
import component from '~/abstract_component';
import container from '~/factories/createjs/components/container';
import rotationSwinger from '~/modificators/rotation/rotation_swinger';
import intervalPulse from '~/modificators/pulse/interval_pulse';

export default function(options){

  checkParameter(options, 'range', true);
  checkParameter(options, 'shakeTime', true); // As an interval object
  checkParameter(options, 'pulseTime', true);
  checkParameter(options, 'child', true);

  var stickRotateShake = component();
  stickRotateShake.shakeTime = options.shakeTime;
  stickRotateShake.pulseTime = options.pulseTime;
  stickRotateShake.range = options.range;

  stickRotateShake.view = container();
  stickRotateShake._innerView = container();
  stickRotateShake._innerView.x = options.child.getWidth() / 2;
  stickRotateShake._innerView.y = options.child.getHeight() / 2;

  stickRotateShake._innerView2 = container();
  stickRotateShake._innerView2.x = -options.child.getWidth() / 2;
  stickRotateShake._innerView2.y = -options.child.getHeight() / 2;

  stickRotateShake.view.addChild(stickRotateShake._innerView);
  stickRotateShake._innerView.addChild(stickRotateShake._innerView2);

  stickRotateShake.swinger = rotationSwinger({subject: stickRotateShake._innerView, range: 10, interval: stickRotateShake.shakeTime});
  stickRotateShake.intervalPulse = intervalPulse({interval: stickRotateShake.pulseTime, subject: stickRotateShake.swinger, property: 'range', begin: 0});
  stickRotateShake._innerView2.addChild(options.child.view);
  stickRotateShake.pulse = function(){
    this.intervalPulse.pulse(stickRotateShake.range);
    this.swinger.start();
  };

  return stickRotateShake;
}
