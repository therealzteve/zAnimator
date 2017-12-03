import swingingModificator from '~/modificators/swinging_modificator';
import abstractModificator from '~/modificators/abstract_modificator';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'range', true);
  checkParameter(options, 'offset', false, 0);

  var rotationSwinger = swingingModificator(abstractModificator(options), options);
  rotationSwinger.range = options.range;
  rotationSwinger.offset = options.offset;

  rotationSwinger.handle = function(current){
    this.subject.rotation = current * this.range + this.offset;
  };
}
