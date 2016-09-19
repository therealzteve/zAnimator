import path from '~/geometry/paths/path';
import arc from '~/geometry/paths/arc';

export default function(radius){

  var circle = {};
  circle.radius = radius;

  circle.path = path();
  circle.path.subPaths.push(arc({ x: 0, y: -circle.radius }, 360, circle.radius));


  return circle;
}
