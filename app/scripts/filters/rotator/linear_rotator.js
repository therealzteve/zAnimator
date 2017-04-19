import abstractFilter from '~/filters/abstract_filter';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'child', true);
  checkParameter(options, 'speed', false, 1);
  var linearRotator = abstractFilter();
  linearRotator.speed = options.speed;
  linearRotator.view.addChild(options.child.view);

  function handle(event){
    this.view.rotation = this.view.rotation + this.speed * (event.delta / 1000);
  }

  linearRotator.handle = handle;

  return linearRotator;
}
