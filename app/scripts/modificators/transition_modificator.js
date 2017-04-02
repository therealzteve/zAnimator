import checkParameter from '~/internal/check_parameter';
import transitionLoop from '~/transitions/transition_loop';

export default function(modificator, options){

    /* Parameters */
    checkParameter(options, 'interval', true);
    checkParameter(options, 'steepness', false, 0.5);

    /* private vars */
    var modificatorTransition = transitionLoop(options.interval, options.steepness, 0, 0, options.onFinishedInterval);

    /* Public methods */
    modificator.start = function(){
      modificatorTransition.start(modificator.handle);
    };

    modificator.stop = function(){
      modificatorTransition.stop();
    };

    return modificator;
}
