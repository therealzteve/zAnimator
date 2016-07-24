import p2pMover from './abstract-mover';


export default function(child, speed){
    var linearP2PMover = p2pMover(child, speed);

    linearP2PMover.handleMove = function(){
      linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * linearP2PMover.progress;
      linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * linearP2PMover.progress;
    };

    return linearP2PMover;
}
