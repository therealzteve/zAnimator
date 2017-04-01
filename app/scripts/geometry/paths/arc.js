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
    return Math.abs(2 * Math.PI * arc.radius * ( arc.degrees / 360 ));
  };

  arc.getPoint = function(progress){
    var origin = {x: arc.start.x, y: arc.start.y };
    var partOfDegrees = arc.degrees * progress;

    if(arc.degrees < 0){
      return {
        x: origin.x + arc.radius * Math.sin(angleToRadians(-partOfDegrees)),
        y: origin.y - arc.radius + arc.radius * Math.cos(angleToRadians(partOfDegrees))
      };
    }

    return {
      x: origin.x + arc.radius * Math.sin(angleToRadians(partOfDegrees)),
      y: origin.y + arc.radius + arc.radius * -Math.cos(angleToRadians(partOfDegrees))
    };

  };

  arc.subPaths = [arc];

  arc.getAngle = function(progress){
    return angleToRadians(arc.degrees * progress);
  };

  arc.getPartPath = function(progress){
    var partOfDegrees = arc.degrees * progress;
    return arcConstructor({start: arc.start, degrees: partOfDegrees, radius: arc.radius});
  };

  return arc;
}
