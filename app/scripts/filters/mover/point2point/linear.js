import p2pMover from './abstract-mover';
import easing from '~/transitions/easing';


export default function(child, speed, easingName){
    var linearP2PMover = p2pMover(child, speed);
    var easingHandler = easing();

    linearP2PMover.easingName = easingName ? easingName : 'linear';

    linearP2PMover.handleMove = function(){
      linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
      linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
    };

    return linearP2PMover;
}
