import checkParameter from '~/internal/check_parameter';
import component from '~/abstract_component';
import container from '~/factories/createjs/components/container';
import fadeShot from './fade_shot';
import circle from '~/factories/createjs/components/circle';
import circleShape from '~/geometry/shapes/circle';
import linearMover from '~/filters/mover/point2point/linear';

export default function(options){

  checkParameter(options, 'amount', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'fadeTime', true); // As an interval object

  var explosion = component();
  explosion.fadeTime = options.fadeTime;
  explosion.amount = options.amount;
  explosion.speed = options.speed;
  explosion.view = container();


  explosion.pulse = function(){
    for(var i = 0; i < this.amount; i++){
      var speedFactor = Math.random();
      var pointShot = fadeShot({'child': circle({'circleShape': circleShape({'radius': 1})}), 'interval': this.fadeTime});
      var mover = linearMover({goalPoint: {x: ( this.fadeTime.getMs() / 1000 ) * this.speed * speedFactor, y: 0}, child: pointShot, interval: this.fadeTime, steepness: 1});
      mover.start();
      var rotationContainer = container();
      rotationContainer.rotation = Math.random() * 360;
      rotationContainer.addChild(mover.view);
      pointShot.pulse(1);
      this.view.addChild(rotationContainer);
    }
  };


  return explosion;
}
