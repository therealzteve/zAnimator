import checkParameter from '~/internal/check_parameter';
import transitionLoop from '~/transitions/transition_loop';

export default function(modificator, options){

    /* Parameters */
    checkParameter(options, 'interval', true);
    checkParameter(options, 'numberOfIntervals', false, 0);
    checkParameter(options, 'progress', false, 0);

    /* private vars */
    modificator.transition = transitionLoop(options.interval, 0.5, options.progress, options.numberOfIntervals, options.onFinishedInterval);

    modificator._handle = function(current){
      this.handle(current - 0.5);
    };

    /* Public methods */
    modificator.start = function(){
      this.transition.start(this._handle, this);
    };

    modificator.stop = function(){
      this.transition.stop();
    };

    modificator.destroy = function(){
      this.stop();
      this.subject = null;
    };

    return modificator;
}
