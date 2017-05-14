import checkParameter from '~/internal/check_parameter';
import transitionLoop from '~/transitions/transition_loop';

export default function(modificator, options){

    /* Parameters */
    checkParameter(options, 'interval', true);
    checkParameter(options, 'steepness', false, 0.5);
    checkParameter(options, 'numberOfIntervals', false, 0);
    checkParameter(options, 'progress', false, 0);

    /* private vars */
    modificator.transition = transitionLoop(options.interval, options.steepness, options.progress, options.numberOfIntervals, options.onFinishedInterval);

    /* Public methods */
    modificator.start = function(){
      this.transition.start(this.handle, this);
    };

    modificator.stop = function(){
      this.transition.stop();
    };

    return modificator;
}
