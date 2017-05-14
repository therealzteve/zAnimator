import checkParameter from '~/internal/check_parameter';
import container from '~/factories/createjs/components/container';
import line from '~/factories/createjs/components/line';
import linePath from '~/geometry/paths/line';
import createLineMover from '~/modificators/position/line_mover';
import interval from '~/timers/interval';
import oneTimeDelay from '~/timers/one_time_delay';

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
    var _line;
    var lineMover;
    if(i < horVerLines.amount / 2 ){
      var posY = Math.random() * horVerLines.height;
      _line = line({'linePath': linePath({
        'end': { 'x': horVerLines.length, 'y': 0},
        'start': { 'x': 0, 'y': 0}
      }) });


      var onFinishedInterval = {
        cb: function() {
          var delay = Math.random() * 5000;
          oneTimeDelay.run(this.start, this, delay);
        }};
      lineMover = createLineMover({
        subject: _line.view,
        startPoint: { x: -horVerLines.length, y: posY},
        goalPoint: { x: horVerLines.width, y: posY },
        interval: interval({'type': 'ms', 'ms': (horVerLines.width / horVerLines.speed) * 1000}),
        onFinishedInterval: onFinishedInterval,
        numberOfIntervals: 1,
        steepness: 1
      });

      onFinishedInterval.scope = lineMover;
    }else{
      var posX = Math.random() * horVerLines.width;
      _line = line({'linePath': linePath({
        'end': { 'x': 0, 'y':  horVerLines.length},
        'start': { 'x': 0, 'y':  0}
      }) });


      var onFinishedInterval2 = {
        cb: function() {
          var delay = Math.random() * 5000;
          oneTimeDelay.run(this.start, this, delay);
        }};

      lineMover = createLineMover({
        subject: _line.view,
        startPoint: { x: posX, y: -horVerLines.length},
        goalPoint: { x: posX, y: horVerLines.height },
        interval: interval({'type': 'ms', 'ms': (horVerLines.height / horVerLines.speed) * 1000}),
        onFinishedInterval: onFinishedInterval2,
        numberOfIntervals: 1,
        steepness: 1
      });

      onFinishedInterval2.scope = lineMover;
    }


    horVerLines.view.addChild(_line.view);
    horVerLines._linesMovers.push(lineMover);
  }

  horVerLines.start = function(){
    for(var j = 0; j < this.amount; j++){
      var delay = Math.random() * 5000;
      oneTimeDelay.run(this._linesMovers[j].start, this._linesMovers[j], delay);
    }
  };

  horVerLines.stop = function(){
    for(var j = 0; j < this.amount; j++){
      this._linesMovers[j].stop();
    }
  };

  return horVerLines;
}
