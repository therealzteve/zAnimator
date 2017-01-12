import angleToRadians from './angle_to_radians';

export default function(angle, length){
  var rad = angleToRadians(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length};
}
