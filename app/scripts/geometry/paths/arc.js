import angleToRadians from '~/geometry/helper/angle_to_radians';

export default function(start, degrees, radius){
  var arc = {};

  arc.start = start ? start : {x: 0, y: 0};
  arc.degrees = degrees;
  arc.radius = radius;
  arc.type = 'arc';

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

  return arc;
}
