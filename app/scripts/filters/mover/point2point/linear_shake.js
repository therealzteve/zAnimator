import linearP2PMover from './abstract-mover';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    /* PArameters */
    checkParameter(options, 'shakeFactor', false, 1);

    /* private vars */
    var shakeMover = linearP2PMover(options);

    shakeMover.shakeFactor = options.shakeFactor;

    /* Public functions */
    shakeMover.handle = function(current){
      var randomFactor = Math.random() * shakeMover.shakeFactor - shakeMover.shakeFactor / 2;
      var amountX = (shakeMover.goalPoint.x - shakeMover.startPoint.x + randomFactor) * current;
      var amountY = (shakeMover.goalPoint.y - shakeMover.startPoint.y + randomFactor) * current;

      shakeMover.view.x = shakeMover.startPoint.x + amountX;
      shakeMover.view.y = shakeMover.startPoint.y + amountY;
    };

    return shakeMover;
}
