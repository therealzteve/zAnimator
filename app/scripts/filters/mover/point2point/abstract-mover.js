import abstractFilter from '~/filters/abstract_filter';
import transitionFilter from '~/filters/transition_filter';
import singleChildFilter from '~/filters/single_child_filter';

import checkParameter from '~/internal/check_parameter';

export default function(options){

    /* Parameters */
    checkParameter(options, 'goalPoint', true);
    checkParameter(options, 'startPoint', false, {x: 0, y: 0});

    /* private vars */
    var p2PMover = singleChildFilter(transitionFilter(abstractFilter(), options), options);

    /* Params and defaults */
    p2PMover.goalPoint = options.goalPoint;
    p2PMover.startPoint = options.startPoint;

    /* Public functions */
    p2PMover.handle = function(current){
      var amountX = (p2PMover.goalPoint.x - p2PMover.startPoint.x) * current;
      var amountY = (p2PMover.goalPoint.y - p2PMover.startPoint.y) * current;

      p2PMover.view.x = p2PMover.startPoint.x + amountX;
      p2PMover.view.y = p2PMover.startPoint.y + amountY;
    };

    /* Init */

    return p2PMover;
}
