import path from '~/geometry/paths/path';
import line from '~/geometry/paths/line';

export default function(width, height){

  var rectangle = {};
  rectangle.width = width;
  rectangle.height = height;

  rectangle.path = path();
  rectangle.path.subPaths.push(line({x: 0, y: 0}, { x: width, y: 0}));
  rectangle.path.subPaths.push(line({x: 0, y: 0}, { x: 0, y: height}));
  rectangle.path.subPaths.push(line({x: 0, y: 0}, { x: -width, y: 0}));
  rectangle.path.subPaths.push(line({x: 0, y: 0}, { x: 0, y: -height}));


  return rectangle;
}
