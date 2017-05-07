import abstractModificator from '~/modificators/abstract_modificator';
import transitionModificator from '~/modificators/transition_modificator';
import checkParameter from '~/internal/check_parameter';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'limit', true);
  checkParameter(options, 'rising', false, true);

  var linearPulsar = transitionModificator(abstractModificator(options), options);
  linearPulsar.limit = options.limit;

  linearPulsar.reset = function(){
    this.transition.stop();
    this.handle(0);
  };

  linearPulsar.handle = function(current){
    setProp(this.subject, 'scale', 1 + current * (this.limit - 1));
    this.subject.draw();
  };

  return linearPulsar;
}
