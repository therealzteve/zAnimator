import checkParameter from '~/internal/check_parameter';
import transitionLoop from '~/transitions/transition_loop';

export default function(modificator, options){

    /* Parameters */
    checkParameter(options, 'interval', true);

    /* private vars */
    var modificatorTransition = transitionLoop(options.interval, 0.5);

    /* Public methods */
    modificator.start = function(){
      modificatorTransition.start(modificator.handle);
    };

    modificator.stop = function(){
      modificatorTransition.stop();
    };

    return modificator;
}
