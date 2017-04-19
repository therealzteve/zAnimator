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
      var amountX = (this.goalPoint.x - this.startPoint.x) * current;
      var amountY = (this.goalPoint.y - this.startPoint.y) * current;

      this.subject.x = this.startPoint.x + amountX;
      this.subject.y = this.startPoint.y + amountY;
    };

    /* Init */
    return p2PMover;
}
