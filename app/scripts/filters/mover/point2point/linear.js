import p2pMover from './abstract-mover';
import easing from '~/transitions/easing';
import checkParameter from '~/internal/check_parameter';


export default function(options){

    checkParameter(options, 'child', true);
    checkParameter(options, 'speed', false, 1);
    checkParameter(options, 'easingName', false, 'linear');

    var linearP2PMover = p2pMover(options.child, options.speed);
    linearP2PMover.easingName = options.easingName;

    var easingHandler = easing();

    linearP2PMover.handleMove = function(){
      linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
      linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
    };

    return linearP2PMover;
}
