import path from '~/geometry/paths/path';
import arc from '~/geometry/paths/arc';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'radius', true);

  var circle = {};
  circle.radius = options.radius;

  circle.path = path();
  circle.path.subPaths.push(arc({start: { x: 0, y: -circle.radius }, degrees: 360, radius: circle.radius}));


  return circle;
}
