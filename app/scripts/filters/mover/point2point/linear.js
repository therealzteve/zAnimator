import P2PMover from './abstract-mover';
import normalize from '~/geometry/normalize';

export default function(child, goalPoint, speed, callback){
    var p2pMover = P2PMover;
    var linearP2PMover = p2pMover(child, goalPoint, callback);

    linearP2PMover.speed = speed ? speed : 300;

    var direction = normalize([child.view.x - goalPoint.x, child.view.y - goalPoint.y]);
    linearP2PMover.handleMove = function(event){
      child.view.x += direction[0] * event.delta * speed;
      child.view.y += direction[1] * event.delta * speed;
      //linearP2PMover.finished = true;
    };

    return linearP2PMover;
}
