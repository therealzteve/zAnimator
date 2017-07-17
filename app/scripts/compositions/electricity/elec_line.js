import checkParameter from '~/internal/check_parameter';
import multiLines from '~/geometry/paths/multi_lines';
import pathView from '~/factories/createjs/components/path';

export default function(options){
  checkParameter(options, 'start', true);
  checkParameter(options, 'end', true);
  checkParameter(options, 'radius', true);
  checkParameter(options, 'amountPoints', true);

  var elecLine = {};
  elecLine.start = options.start;
  elecLine.end = options.end;
  elecLine.radius = options.radius;
  elecLine.amountPoints = options.amountPoints;
  elecLine.multiLines = multiLines({points: [] });
  elecLine.pathView = pathView({path: elecLine.mutliLines});
  elecLine.view = elecLine.pathView.view;

  elecLine.draw = function(){
    this.multiLines.points.length = 0;
    for(var i = 0; i < this.amountPoints; i++){
      this.multiLines.points.push({
        x: ((this.end.x - this.start.x) / this.amountPoints) * (i + 1) + (this.radius * Math.random()) - (0.5 * this.radius),
        y: ((this.end.y - this.start.y) / this.amountPoints) * (i + 1) + (this.radius * Math.random()) - (0.5 * this.radius)
      });
    }
    this.pathView.draw();
  };

  return elecLine;

}
