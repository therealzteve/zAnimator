import abstractMover from './abstract-mover';
import { easeInOutBack } from 'easing-utils';

export default function(child, speed){
    var inOutQuadMover = abstractMover(child, speed);


    inOutQuadMover.handleMove = function(){
      var value = easeInOutBack(inOutQuadMover.progress);
      inOutQuadMover.view.x = inOutQuadMover.startPoint.x + inOutQuadMover.distance * inOutQuadMover.direction[0] * value;
      inOutQuadMover.view.y = inOutQuadMover.startPoint.y + inOutQuadMover.distance * inOutQuadMover.direction[1] * value;
    };

    return inOutQuadMover;
}
