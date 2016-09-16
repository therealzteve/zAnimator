import toVector from '~/geometry/to_vector';
import distance from '~/geometry/distance';

export default function(start, end){
  var line = {};
  line.start = start ? start : {x: 0, y: 0};
  line.end = end;

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

  return line;
}
