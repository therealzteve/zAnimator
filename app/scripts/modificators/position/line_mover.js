import abstractModificator from '~/modificators/abstract_modificator';
import transitionModificator from '~/modificators/transition_modificator';

import checkParameter from '~/internal/check_parameter';

export default function(options){

    /* Parameters */
    checkParameter(options, 'goalPoint', true);
    checkParameter(options, 'startPoint', false, {x: 0, y: 0});

    /* private vars */
    var p2PMover = transitionModificator(abstractModificator(options), options);

    /* Params and defaults */
    p2PMover.goalPoint = options.goalPoint;
    p2PMover.startPoint = options.startPoint;

    /* Public functions */
    p2PMover.handle = function(current){
      var amountX = (p2PMover.goalPoint.x - p2PMover.startPoint.x) * current;
      var amountY = (p2PMover.goalPoint.y - p2PMover.startPoint.y) * current;

      p2PMover.subject.x = p2PMover.startPoint.x + amountX;
      p2PMover.subject.y = p2PMover.startPoint.y + amountY;
    };

    /* Init */
    return p2PMover;
}
