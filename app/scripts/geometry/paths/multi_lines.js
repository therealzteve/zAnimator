import line from './line';
import path from './path';
import checkParameter from '~/internal/check_parameter';


export default function lineConstructor(options){

  checkParameter(options, 'points', true);

  var multiLines = {};
  multiLines.points = options.points;
  multiLines.path = path();

  var currentPoint = {x: 0, y: 0};
  for(var i = 0; i < multiLines.points.length; i++){
      var _line = line({end: {x: multiLines.points[i].x - currentPoint.x, y: multiLines.points[i].y - currentPoint.y} });
      multiLines.path.subPaths.push(_line);
  }

  multiLines.getEdgePoint = function(){
    return this.points[this.points.length - 1];
  };

  multiLines.getLength = function(){
    return this.path.getLength();
  };

  multiLines.getPoint = function(progress){
    return this.path.getPoint(progress);
  };

  multiLines.getPartPath = function(progress){
    return this.path.getPartPath(progress);
  };

  return line;
}
