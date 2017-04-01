import abstractFilter from '~/filters/abstract_filter';
import transitionFilter from '~/filters/transition_filter';
import singleChildFilter from '~/filters/single_child_filter';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'path', true);

  var pathMover = transitionFilter(singleChildFilter(abstractFilter(), options), options);
  pathMover.path = options.path;

  /* Public functions */
  pathMover.handle = function(current){
    var point = pathMover.path.getPoint(current);
    pathMover.view.x = point.x;
    pathMover.view.y = point.y;
  };

  return pathMover;
}
