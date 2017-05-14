import checkParameter from '~/internal/check_parameter';
import line from '~/factories/createjs/components/line';
import linePath from '~/geometry/paths/line';
import container from '~/factories/createjs/components/container';


export default function(options){
  checkParameter(options, 'points', true);

  var pointWeb = {};
  pointWeb.points = options.points;
  pointWeb._lines = [];
  pointWeb.view = container();

  pointWeb.draw = function(){
    for(var _line of this._lines){
      _line.draw();
    }
  };

  pointWeb.init = function(){
    for(var i = 0; i< this.points.length - 1; i++){
      for(var j = i+1; j < this.points.length; j++){
        var _linePath = linePath(
          {
            start: this.points[i],
            end: this.points[j]
          }
        );
        var _line = line({linePath: _linePath});
        this._lines.push(_line);
        this.view.addChild(_line.view);
      }
    }
  };

  pointWeb.init();
  return pointWeb;
}
