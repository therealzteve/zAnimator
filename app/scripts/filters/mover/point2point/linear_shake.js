import p2PMover from './abstract-mover';
import checkParameter from '~/internal/check_parameter';


export default function(options){

  checkParameter(options, 'child', true);
  checkParameter(options, 'shakeFactor', false, 1);
  checkParameter(options, 'speed', false, 1);

  var linearP2PMover = p2PMover(options.child, options.speed);
  linearP2PMover.shakeFactor = options.shakeFactor;

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
