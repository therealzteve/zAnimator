import P2PMover from './abstract-mover';

export default function(child, goalPoint, callback){
    var p2pMover = P2PMover;
    var instantP2PMover = p2pMover(child, goalPoint, callback);

    instantP2PMover.handleMove = function() {
      child.view.x = instantP2PMover.goalPoint.x;
      child.view.y = instantP2PMover.goalPoint.x;
      instantP2PMover.finished = true;
    };

    return instantP2PMover;
}
