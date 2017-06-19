import transitionModificator from './transition_modificator';
import abstractModificator from './abstract_modificator';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'begin', true);
  checkParameter(options, 'end', true);
  checkParameter(options, 'property', true);

  var rangeModificator = transitionModificator(abstractModificator(options), options);
  rangeModificator.begin = options.begin;
  rangeModificator.end = options.end;
  rangeModificator.property = options.property;

  rangeModificator.handle = function(current){
      if(typeof this.subject[this.property] !== 'undefined'){
        this.subject[this.property] = (this.end - this.begin) * current + this.begin;
      }
  };

  return rangeModificator;
}
