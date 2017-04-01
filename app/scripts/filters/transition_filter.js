import checkParameter from '~/internal/check_parameter';
import transition from '~/transitions/transition_loop';

export default function(filter, options){

    /* Parameters */
    checkParameter(options, 'interval', true);

    /* private vars */
    var filterTransition = transition(options.interval, 0.5);

    /* Public methods */
    filter.start = function(){
      filterTransition.start(filter.handle);
    };

    filter.stop = function(){
      filterTransition.stop();
    };

    return filter;
}
