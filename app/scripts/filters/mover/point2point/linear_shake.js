import p2PMover from './abstract-mover';

export default function(child, speed, shakeFactor){
  var linearP2PMover = p2PMover(child, speed);
  linearP2PMover.shakeFactor = shakeFactor ? shakeFactor : 1;

  linearP2PMover.handleMove = function(){
    var randomFactor = Math.random() * linearP2PMover.shakeFactor - linearP2PMover.shakeFactor / 2;
    linearP2PMover.view.x =
      linearP2PMover.startPoint.x
      + linearP2PMover.distance * linearP2PMover.direction[0] * linearP2PMover.progress
      + randomFactor * linearP2PMover.direction[0];
    linearP2PMover.view.y =
      linearP2PMover.startPoint.y
      + linearP2PMover.distance * linearP2PMover.direction[1] * linearP2PMover.progress
      + randomFactor * linearP2PMover.direction[1];
  };

  return linearP2PMover;
}
