import checkParameter from '~/internal/check_parameter';
import linearRotator from '~/modificators/rotation/linear_rotator';

export default function(options){
  checkParameter(options, 'circleRows', true);
  checkParameter(options, 'speed', true);

  var circleRowOppositeRotator = {};
  circleRowOppositeRotator.circleRows = options.circleRows;
  circleRowOppositeRotator.speed = options.speed;
  circleRowOppositeRotator._rotators = [];

  for(var i = 0; i < circleRowOppositeRotator.circleRows.rows.length; i++){
    var speed = circleRowOppositeRotator.speed;
    if(i % 2 === 0 ){
      speed = -speed;
    }

    circleRowOppositeRotator._rotators.push(linearRotator({
      subject: circleRowOppositeRotator.circleRows.rows[i],
      speed: speed}));
  }

  circleRowOppositeRotator.start = function(){
    for(var rotator of this._rotators){
      rotator.start();
    }
  };

  circleRowOppositeRotator.stop = function(){
    for(var rotator of this._rotators){
      rotator.stop();
    }
  };

  return circleRowOppositeRotator;
}
