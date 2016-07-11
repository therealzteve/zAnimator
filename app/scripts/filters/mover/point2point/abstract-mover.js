import loop from '~/loop';
import factory from '~/factories/createjs/factory';
import normalize from '~/geometry/normalize';

export default function(child){
    var p2PMover = {};

    /* Params and defaults */
    p2PMover.goalPoint = {x: 0, y: 0};
    p2PMover.finished = true;
    p2PMover.perspective = {x: 0, y: 0};
    p2PMover.view = factory.container();

    /*
        Sets informations in the perspective object
        determs if the goal point is
        left, right, top or down of the current point
     */
    function setPerspectiveInformation(){
      if(p2PMover.goalPoint.x - p2PMover.view.x >= 0){
        p2PMover.perspective.x = 1;
      }else{
        p2PMover.perspective.x = -1;
      }

      if(p2PMover.goalPoint.y - p2PMover.view.y >= 0){
        p2PMover.perspective.y = 1;
      }else{
        p2PMover.perspective.y = -1;
      }
    }

    /* Public functions */
    function start(){
      p2PMover.view.addChild(child.view);
      loop.addAnimation(p2PMover.handle);
    }

    function stop(){
      loop.removeAnimation(p2PMover.handle);
    }

    function handle(delta){
      if(!p2PMover.finished){
        p2PMover.handleMove(delta);
      }
      if(p2PMover.isPointReached()){
        p2PMover.finished = true;
        p2PMover.view.x = p2PMover.goalPoint.x;
        p2PMover.view.y = p2PMover.goalPoint.y;
        p2PMover.perspective.x = 0;
        p2PMover.perspective.y = 0;
        if(p2PMover.callback){
          p2PMover.callback();
        }
      }
    }

    function moveTo(goalPoint, callback){
      p2PMover.direction = normalize([goalPoint.x - p2PMover.view.x, goalPoint.y - p2PMover.view.y]);
      p2PMover.goalPoint = goalPoint;
      p2PMover.callback = callback;
      p2PMover.finished = false;
      setPerspectiveInformation();
    }

    function move(direction){
      p2PMover.finished = false;
      p2PMover.goalPoint = null;
      p2PMover.direction = normalize([direction.x, direction.y]);
    }

    function isPointReached(){
      if(!p2PMover.goalPoint){
        return false;
      }
      if( (p2PMover.goalPoint.x - p2PMover.view.x) * p2PMover.perspective.x > 0 ){
        return false;
      }

      if( (p2PMover.goalPoint.y - p2PMover.view.y) * p2PMover.perspective.y > 0 ){
        return false;
      }

      return true;
    }

    p2PMover.start = start;
    p2PMover.stop = stop;
    p2PMover.handle = handle;
    p2PMover.moveTo = moveTo;
    p2PMover.move = move;
    p2PMover.isPointReached = isPointReached;
    return p2PMover;
}
