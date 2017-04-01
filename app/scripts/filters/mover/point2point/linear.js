import p2pMover from './abstract-mover';

export default function(options){

    /* Private vars */
    var linearP2PMover = p2pMover(options);

    /* Public functions */
    linearP2PMover.handle = function(current){
      var amountX = (linearP2PMover.goalPoint.x - linearP2PMover.startPoint.x) * current;
      var amountY = (linearP2PMover.goalPoint.y - linearP2PMover.startPoint.y) * current;

      linearP2PMover.view.x = linearP2PMover.startPoint.x + amountX;
      linearP2PMover.view.y = linearP2PMover.startPoint.y + amountY;
    };

    return linearP2PMover;
}
