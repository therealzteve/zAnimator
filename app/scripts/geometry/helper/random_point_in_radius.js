export default function(radius, offset){

  var randomValue = Math.random() * Math.PI;

  var point = {x: offset.x + Math.cos(randomValue), y: offset.y + Math.cos(randomValue)};

  return point;
}
