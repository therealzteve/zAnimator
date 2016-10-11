import toVector from '~/geometry/to_vector';
import distance from '~/geometry/distance';

export default function lineConstructor(start, end){
  var line = {};
  line.start = start ? start : {x: 0, y: 0};
  line.end = end;
  line.type = 'line';

  line.getEdgePoint = function(){
    return line.end;
  };

  line.getLength = function(){
    return distance(toVector(line.start), toVector(line.end));
  };

  line.getPoint = function(progress){
    return {
              x: line.start.x + (line.end.x - line.start.x) * progress,
              y: line.start.y + (line.end.y - line.start.y) * progress
           };
  };

  line.getPartPath = function(progress){
    var newEnd = { x: end.x * progress, y: end.y * progress};
    var pathPart = lineConstructor(start, newEnd);
    return pathPart;
  };

  return line;
}
