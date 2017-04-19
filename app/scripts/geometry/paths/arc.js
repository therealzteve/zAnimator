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
    return this.getPoint(1);
  };

  arc.getLength = function(){
    return Math.abs(2 * Math.PI * this.radius * ( this.degrees / 360 ));
  };

  arc.getPoint = function(progress){
    var origin = {x: this.start.x, y: this.start.y };
    var partOfDegrees = this.degrees * progress;

    if(this.degrees < 0){
      return {
        x: origin.x + this.radius * Math.sin(angleToRadians(-partOfDegrees)),
        y: origin.y - this.radius + this.radius * Math.cos(angleToRadians(partOfDegrees))
      };
    }

    return {
      x: origin.x + this.radius * Math.sin(angleToRadians(partOfDegrees)),
      y: origin.y + this.radius + this.radius * -Math.cos(angleToRadians(partOfDegrees))
    };

  };

  arc.subPaths = [arc];

  arc.getAngle = function(progress){
    return angleToRadians(this.degrees * progress);
  };

  arc.getPartPath = function(progress){
    var partOfDegrees = this.degrees * progress;
    return arcConstructor({start: this.start, degrees: partOfDegrees, radius: this.radius});
  };

  return arc;
}
