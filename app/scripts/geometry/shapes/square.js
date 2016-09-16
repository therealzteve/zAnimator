import path from '~/geometry/paths/path';
import line from '~/geometry/paths/line';

export default function(sidelength){

  var square = {};
  square.sidelength = sidelength;

  square.path = path();
  square.path.subPaths.push(line({x: 0, y: 0}, {x: sidelength, y: 0}));
  square.path.subPaths.push(line({x: 0, y: 0}, {x: 0, y: sidelength}));
  square.path.subPaths.push(line({x: 0, y: 0}, {x: -sidelength, y: 0}));
  square.path.subPaths.push(line({x: 0, y: 0}, {x: 0, y: -sidelength}));

  return square;
}
