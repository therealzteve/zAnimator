import abstractFilter from '~/filters/abstract_filter';

import normalize from '~/geometry/normalize';
import distance from '~/geometry/distance';
import toVector from '~/geometry/to_vector';

export default function(child, speed){
    var p2PMover = abstractFilter();
    p2PMover.view.addChild(child.view);

    /* Params and defaults */
    p2PMover.goalPoint = {x: 0, y: 0};
    p2PMover.speed = speed ? speed : 1;
    p2PMover.progress = 0;
    p2PMover.finished = true;
    p2PMover.perspective = {x: 0, y: 0};

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
    function handle(event){
      p2PMover.progress += (event.delta / 1000) * p2PMover.step;

      if(p2PMover.progress <= 1){
        p2PMover.handleMove();
      }else{
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
      p2PMover.startPoint = {x: p2PMover.view.x, y: p2PMover.view.y};
      p2PMover.goalPoint = goalPoint;
      p2PMover.distance = distance(toVector(p2PMover.startPoint), toVector(p2PMover.goalPoint));
      p2PMover.step = p2PMover.speed / p2PMover.distance;
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

    p2PMover.handle = handle;
    p2PMover.moveTo = moveTo;
    p2PMover.move = move;
    p2PMover.isPointReached = isPointReached;
    return p2PMover;
}
