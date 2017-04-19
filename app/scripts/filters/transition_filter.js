import checkParameter from '~/internal/check_parameter';
import transition from '~/transitions/transition_loop';

export default function(filter, options){

    /* Parameters */
    checkParameter(options, 'interval', true);

    /* private vars */
    filter._filterTransition = transition(options.interval, 0.5);

    /* Public methods */
    filter.start = function(){
      this._filterTransition.start(this.handle);
    };

    filter.stop = function(){
      this._filterTransition.stop();
    };

    return filter;
}
