import Bezier from 'bezier-js';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'start', false, {x: 0, y: 0});
  checkParameter(options, 'end', true);
  checkParameter(options, 'cpoint1', true);
  checkParameter(options, 'cpoint2', false);

  var bezierCurve = {};
  bezierCurve.start = options.start;
  bezierCurve.end = options.end;
  bezierCurve.cpoint1 = options.cpoint1;
  bezierCurve.cpoint2 = options.cpoint2;
  bezierCurve.type = 'bezier_curve';

  if(bezierCurve.cpoint2){
    bezierCurve.internalBezier = new Bezier(bezierCurve.start, bezierCurve.cpoint1, bezierCurve.cpoint2, bezierCurve.end);
  }else{
    bezierCurve.internalBezier = new Bezier(bezierCurve.start, bezierCurve.cpoint1, bezierCurve.end);
  }

  bezierCurve.subPaths = [bezierCurve];

  bezierCurve.getEdgePoint = function(){
    return this.end;
  };

  bezierCurve.getLength = function(){
    return this.internalBezier.length();
  };

  bezierCurve.getPoint = function(progress){
    return this.internalBezier.get(progress);
  };

  //TODO Add get part path function

  return bezierCurve;
}
