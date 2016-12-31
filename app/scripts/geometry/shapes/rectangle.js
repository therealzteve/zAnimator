import path from '~/geometry/paths/path';
import line from '~/geometry/paths/line';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'width', true);
  checkParameter(options, 'height', true);

  var rectangle = {};
  rectangle.width = options.width;
  rectangle.height = options.height;

  rectangle.path = path();
  rectangle.path.subPaths.push(line({start: {x: 0, y: 0}, end: { x: rectangle.width, y: 0}}));
  rectangle.path.subPaths.push(line({start: {x: 0, y: 0}, end: { x: 0, y: rectangle.height}}));
  rectangle.path.subPaths.push(line({start: {x: 0, y: 0}, end: { x: -rectangle.width, y: 0}}));
  rectangle.path.subPaths.push(line({start: {x: 0, y: 0}, end: { x: 0, y: -rectangle.height}}));

  return rectangle;
}
