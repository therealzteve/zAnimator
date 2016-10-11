export default function(start, end, cpoint1, cpoint2){
  var bezierCurve = {};
  bezierCurve.start = start ? start : {x: 0, y: 0};
  bezierCurve.end = end;
  bezierCurve.cpoint1 = cpoint1;
  bezierCurve.cpoint2 = cpoint2;
  bezierCurve.type = 'bezier_curve';

  bezierCurve.subPaths = [bezierCurve];

  bezierCurve.getEdgePoint = function(){
    return bezierCurve.end;
  };

  bezierCurve.getLength = function(){
    //return distance(toVector(line.start), toVector(line.end));
  };

  bezierCurve.getPoint = function(progress){
    console.log(progress);
    /*return {
              x: line.start.x + (line.end.x - line.start.x) * progress,
              y: line.start.y + (line.end.y - line.start.y) * progress
           };*/
  };

  return bezierCurve;
}
