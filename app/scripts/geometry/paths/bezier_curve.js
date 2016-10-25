import Bezier from 'bezier-js';

export default function(start, end, cpoint1, cpoint2){
  var bezierCurve = {};
  bezierCurve.start = start ? start : {x: 0, y: 0};
  bezierCurve.end = end;
  bezierCurve.cpoint1 = cpoint1;
  bezierCurve.cpoint2 = cpoint2;
  bezierCurve.type = 'bezier_curve';
  if(bezierCurve.cpoint2){
    bezierCurve.internalBezier = new Bezier(bezierCurve.start, bezierCurve.cpoint1, bezierCurve.cpoint2, bezierCurve.end);
  }else{
    bezierCurve.internalBezier = new Bezier(bezierCurve.start, bezierCurve.cpoint1, bezierCurve.end);
  }



  bezierCurve.subPaths = [bezierCurve];

  bezierCurve.getEdgePoint = function(){
    return bezierCurve.end;
  };

  bezierCurve.getLength = function(){
    return bezierCurve.internalBezier.length();
  };

  bezierCurve.getPoint = function(progress){
    return bezierCurve.internalBezier.get(progress);
  };

  return bezierCurve;
}
