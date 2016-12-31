import abstractFilter from '~/filters/abstract_filter';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'child', true);
  checkParameter(options, 'path', true);
  checkParameter(options, 'progressRate', false, 0);


  var pathMover = abstractFilter();
  pathMover.currentProgress = 0;
  pathMover.progressRate = options.progressRate;
  pathMover.path = options.path;

  pathMover.view.addChild(options.child.view);

  pathMover.handle = function(event){
    pathMover.currentProgress += pathMover.progressRate * (event.delta / 1000);
    if(pathMover.currentProgress > 1) {
      pathMover.currentProgress -= 1;
    }
    var point = pathMover.path.getPoint(pathMover.currentProgress);
    pathMover.view.x = point.x;
    pathMover.view.y = point.y;
  };

  return pathMover;
}
