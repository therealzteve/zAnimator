import toVector from '~/geometry/to_vector';
import distance from '~/geometry/distance';
import checkParameter from '~/internal/check_parameter';

export default function lineConstructor(options){

checkParameter(options, 'start', false, {x: 0, y: 0});
checkParameter(options, 'end', true);

  var line = {};
  line.start = options.start;
  line.end = options.end;
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
    var newEnd = { x: line.end.x * progress, y: line.end.y * progress};
    var pathPart = lineConstructor({start: line.start, end: newEnd});
    return pathPart;
  };

  return line;
}
