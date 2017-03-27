import angleToRadians from '~/geometry/helper/angle_to_radians';
import checkParameter from '~/internal/check_parameter';

export default function arcConstructor(options){

  // Parameters
  checkParameter(options, 'start', false, {x: 0, y: 0});
  checkParameter(options, 'degrees', true);
  checkParameter(options, 'radius', true);

  // private vars
  var arc = {};

  arc.start = options.start;
  arc.degrees = options.degrees;
  arc.radius = options.radius;
  arc.type = 'arc';

  // public functions
  arc.getEdgePoint = function(){
    return arc.getPoint(1);
  };

  arc.getLength = function(){
    return 2 * Math.PI * arc.radius * ( arc.degrees / 360 );
  };

  arc.getPoint = function(progress){
    var origin = {x: 0, y: arc.start.y + arc.radius };
    var partOfDegrees = arc.degrees * progress;
    return {
      x: origin.x + arc.radius * Math.sin(angleToRadians(partOfDegrees)),
      y: origin.y + arc.radius * -Math.cos(angleToRadians(partOfDegrees))
    };

  };

  arc.getAngle = function(progress){
    return angleToRadians(arc.degrees * progress);
  };

  arc.getPartPath = function(progress){
    var partOfDegrees = arc.degrees * progress;
    return arcConstructor({start: arc.start, degrees: partOfDegrees, radius: arc.radius});
  };

  return arc;
}
