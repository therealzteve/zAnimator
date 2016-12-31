import path from '~/geometry/paths/path';
import line from '~/geometry/paths/line';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'sidelength', true);

  var square = {};
  square.sidelength = options.sidelength;

  square.path = path();
  square.path.subPaths.push(line({start: {x: 0, y: 0}, end: {x: square.sidelength, y: 0}}));
  square.path.subPaths.push(line({start: {x: 0, y: 0}, end: {x: 0, y: square.sidelength}}));
  square.path.subPaths.push(line({start: {x: 0, y: 0}, end: {x: -square.sidelength, y: 0}}));
  square.path.subPaths.push(line({start: {x: 0, y: 0}, end: {x: 0, y: -square.sidelength}}));

  return square;
}
