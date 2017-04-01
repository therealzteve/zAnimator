import angleToRadians from '~/geometry/helper/angle_to_radians';
/*eslint-disable camelcase*/
function pathDrawer(){}

pathDrawer.line = function(graphics, path, current){
  graphics.lineTo(current.x + path.getEdgePoint().x, current.y + path.getEdgePoint().y);
};

pathDrawer.arc = function(graphics, path, current){
  graphics.moveTo(current.x + path.start.x, current.y + path.start.y);
  if(path.degrees < 0){
    graphics.arc(path.start.x, path.start.y - path.radius, path.radius, angleToRadians(90), angleToRadians(90 + path.degrees), true);
  }else{
    graphics.arc(path.start.x, path.start.y + path.radius, path.radius, angleToRadians(-90), angleToRadians(path.degrees - 90));
  }
};

pathDrawer.sine_wave = function(graphics, path, current){
  graphics.moveTo(current.x + path.start.x, current.y + path.start.y);
  for(var x = 0; x < path.getLength(); x += 5){
    var point = path.getPoint(x / path.getLength());
    graphics.lineTo(point.x, point.y);
  }
};

pathDrawer.bezier_curve = function(graphics, path, current){
  graphics.moveTo(current.x + path.start.x, current.y + path.start.y);
  if(path.cpoint2){
    graphics.bezierCurveTo(path.cpoint1.x, path.cpoint1.y, path.cpoint2.x, path.cpoint2.y, path.end.x, path.end.y);
  }else{
    graphics.quadraticCurveTo(path.cpoint1.x, path.cpoint1.y, path.end.x, path.end.y);
  }
};

export default pathDrawer;
