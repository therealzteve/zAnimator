import loop from '~/loop';
import factory from '~/factories/createjs/factory';

export default function(child, speed){
  var linearRotator = {};

  linearRotator.speed = speed ? speed : 1;
  linearRotator.view = factory.container();

  /* Public functions */
  function start(){
    linearRotator.view.addChild(child.view);
    loop.addAnimation(linearRotator.handle);
  }

  function stop(){
    loop.removeAnimation(linearRotator.handle);
  }

  function handle(event){
    linearRotator.view.rotation = linearRotator.view.rotation + linearRotator.speed * (event.delta / 1000);
  }

  linearRotator.start = start;
  linearRotator.stop = stop;
  linearRotator.handle = handle;

  return linearRotator;
}
