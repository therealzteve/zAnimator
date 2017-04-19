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
    return this.end;
  };

  line.getLength = function(){
    return distance(toVector(this.start), toVector(this.end));
  };

  line.getPoint = function(progress){
    return {
              x: this.start.x + (this.end.x - this.start.x) * progress,
              y: this.start.y + (this.end.y - this.start.y) * progress
           };
  };

  line.getPartPath = function(progress){
    var newEnd = { x: this.end.x * progress, y: this.end.y * progress};
    var pathPart = lineConstructor({start: this.start, end: newEnd});
    return pathPart;
  };

  return line;
}
