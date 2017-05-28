import checkParameter from '~/internal/check_parameter';
import animationModificator from '~/modificators/animation_modificator';

export default function(options){
  checkParameter(options, 'circleRows', true);
  checkParameter(options, 'speed', true);

  var circleRowOppositeRotator = animationModificator({});
  circleRowOppositeRotator.circleRows = options.circleRows;
  circleRowOppositeRotator.speed = options.speed;
  circleRowOppositeRotator._listener = null;

  circleRowOppositeRotator.handle = function(event){
    for(var i = 0; i < this.circleRows.rows.length; i++){
      var speed = this.speed;
      if(i % 2 === 0 ){
        speed = -speed;
      }
      this.circleRows.rows[i].rotation += speed * (event.delta / 1000);
    }
  };

  return circleRowOppositeRotator;
}
