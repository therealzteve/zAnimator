import P2PMover from './abstract-mover';


export default function(child, speed){
    var p2pMover = P2PMover;
    var linearP2PMover = p2pMover(child);


    linearP2PMover.speed = speed ? speed : 300;

    linearP2PMover.handleMove = function(event){
      linearP2PMover.view.x += linearP2PMover.direction[0] * event.delta * speed / 1000;
      linearP2PMover.view.y += linearP2PMover.direction[1] * event.delta * speed / 1000;
    };

    return linearP2PMover;
}
