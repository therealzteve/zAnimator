import line from './line';
import path from './path';
import checkParameter from '~/internal/check_parameter';


export default function lineConstructor(options){

  checkParameter(options, 'points', true);

  var multiLines = {};
  multiLines.points = options.points;
  multiLines.path = path();
  multiLines._currentPoint = {x: 0, y: 0};

  multiLines.getEdgePoint = function(){
    return this.points[this.points.length - 1];
  };

  multiLines.getLength = function(){
    return this.path.getLength();
  };

  multiLines.getPoint = function(progress){
    return this.path.getPoint(progress);
  };

  multiLines.getPartPath = function(progress){
    return this.path.getPartPath(progress);
  };

  multiLines.refresh = function(){
    this.path.subPaths.length = 0;
    this._currentPoint = {x: 0, y: 0};
    for(var i = 0; i < this.points.length; i++){
        var _line = line({end: {x: this.points[i].x - this._currentPoint.x, y: this.points[i].y - this._currentPoint.y} });
        this._currentPoint = {x: this.points[i].x, y: this.points[i].y};
        this.path.subPaths.push(_line);
    }
  };

  multiLines.refresh();
  return multiLines;
}
