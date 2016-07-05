import loop from '~/loop';
import factory from '~/factories/createjs/factory';

export default function(child, goalPoint, callback){
    var p2PMover = {};

    /* Params and defaults */
    p2PMover.callback = callback;
    p2PMover.goalPoint = goalPoint;
    p2PMover.finished = false;
    p2PMover.view = factory.container();

    /* Public functions */
    function start(){
      p2PMover.view.addChild(child.view);
      loop.addAnimation(p2PMover.handle);
    }

    function stop(){
      loop.removeAnimation(p2PMover.handle);
      p2PMover.callback();
    }

    function handle(delta){
      p2PMover.handleMove(delta);
      if(p2PMover.finished){
          stop();
      }
    }

    p2PMover.start = start;
    p2PMover.stop = stop;
    p2PMover.handle = handle;

    return p2PMover;
}
