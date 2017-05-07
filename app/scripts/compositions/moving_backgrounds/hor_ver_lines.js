import checkParameter from '~/internal/check_parameter';
import container from '~/factories/createjs/components/container';
import line from '~/factories/createjs/components/line';
import linePath from '~/geometry/paths/line';
import createLineMover from '~/modificators/position/line_mover';
import interval from '~/timers/interval';

export default function(options){

  checkParameter(options, 'amount', true);
  checkParameter(options, 'width', true);
  checkParameter(options, 'height', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'length', true);

  var horVerLines = {};
  horVerLines.amount = options.amount;
  horVerLines.width = options.width;
  horVerLines.height = options.height;
  horVerLines.speed = options.speed;
  horVerLines.length = options.length;
  horVerLines.view = container();

  horVerLines._linesMovers = [];

  for(var i = 0; i < horVerLines.amount; i++){
    var _line = line({'linePath': linePath({'end': { 'x': horVerLines.length, 'y': Math.random() * horVerLines.height}}), });

    var lineMover = createLineMover({
      subject: _line.view,
      startPoint: { x: -horVerLines.length, y: 0},
      goalPoint: { x: horVerLines.width, y: 0 },
      interval: interval({'type': 'ms', 'ms': (horVerLines.width / horVerLines.speed) * 1000}),
      steepness: 1
    });

    horVerLines.view.addChild(_line.view);
    horVerLines._linesMovers.push(lineMover);
  }

  horVerLines.start = function(){
    for(var j = 0; j < this.amount; j++){
      this._linesMovers[j].start();
    }
  };

  horVerLines.stop = function(){
    for(var j = 0; j < this.amount; j++){
      this._linesMovers[j].stop();
    }
  };

  return horVerLines;
}
