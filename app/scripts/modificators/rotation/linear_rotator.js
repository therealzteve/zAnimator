import abstractModificator from '~/modificators/abstract_modificator';
import animationModificator from '~/modificators/animation_modificator';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'speed', true);

  var linearRotator = animationModificator(abstractModificator(options));
  linearRotator.speed = options.speed;

  linearRotator.handle = function(event){
      this.subject.rotation += this.speed * (event.delta / 1000);
      while(this.subject.rotation >= 360){
        this.subject.rotation -= 360;
      }
  };

  return linearRotator;
}
