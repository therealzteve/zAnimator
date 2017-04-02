import abstractModificator from '~/modificators/abstract_modificator';
import transitionModificator from '~/modificators/transition_modificator';

import checkParameter from '~/internal/check_parameter';

export default function(options){

    /* Parameters */
    checkParameter(options, 'goalPoint', true);
    checkParameter(options, 'startPoint', false, {x: 0, y: 0});
    checkParameter(options, 'shakeFactor', false, 1);

    /* private vars */
    var shakeMover = transitionModificator(abstractModificator(options), options);

    // Params and defaults
    shakeMover.shakeFactor = options.shakeFactor;
    shakeMover.goalPoint = options.goalPoint;
    shakeMover.startPoint = options.startPoint;

    /* Public functions */
    shakeMover.handle = function(current){
      var randomFactor = Math.random() * shakeMover.shakeFactor - shakeMover.shakeFactor / 2;
      var distX = (shakeMover.goalPoint.x - shakeMover.startPoint.x);
      var distY =  (shakeMover.goalPoint.y - shakeMover.startPoint.y);
      var randomX = randomFactor * distX / (distX + distY);
      var randomY = randomFactor * distY / (distX + distY);
      var amountX = distX * current + randomX;
      var amountY = distY * current + randomY;

      shakeMover.subject.x = shakeMover.startPoint.x + amountX;
      shakeMover.subject.y = shakeMover.startPoint.y + amountY;
    };

    return shakeMover;
}
