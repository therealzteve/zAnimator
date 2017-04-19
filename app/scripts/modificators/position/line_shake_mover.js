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
      var randomFactor = Math.random() * this.shakeFactor - this.shakeFactor / 2;
      var distX = (this.goalPoint.x - this.startPoint.x);
      var distY = (this.goalPoint.y - this.startPoint.y);
      var randomX = randomFactor * distX / (distX + distY);
      var randomY = randomFactor * distY / (distX + distY);
      var amountX = distX * current + randomX;
      var amountY = distY * current + randomY;

      this.subject.x = this.startPoint.x + amountX;
      this.subject.y = this.startPoint.y + amountY;
    };

    return shakeMover;
}
