import abstractFilter from '~/filters/abstract_filter';

export default function(child, speed){
  var linearRotator = abstractFilter();

  linearRotator.speed = speed ? speed : 1;
  linearRotator.view.addChild(child.view);

  function handle(event){
    linearRotator.view.rotation = linearRotator.view.rotation + linearRotator.speed * (event.delta / 1000);
  }

  linearRotator.handle = handle;

  return linearRotator;
}
