import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import bezierCurve from '~/geometry/paths/bezier_curve';
import pulsar from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';

/**
* Options:
* length --> length of the swing line
* amplitude --> amplitude in pixels of the swing line
* time --> time for a complete swing (up and down)
*/
export default function(options){
  var swingLine = {};

  checkParameter(options, 'length', true);
  checkParameter(options, 'amplitude', true);
  checkParameter(options, 'time', true);

  swingLine.length = options.length;
  swingLine.amplitude = options.amplitude;
  swingLine.time = options.time;

  swingLine.pulsar = pulsar(swingLine.time, 0.5);
  swingLine.view = container();
  swingLine.bezierCurve = bezierCurve({start: {x: 0, y: 0}, end: {x: swingLine.length, y: 0}, cpoint1: {x: swingLine.length / 2, y: 0}});
  swingLine.pathView = pathView({path: swingLine.bezierCurve});

  swingLine.start = function(){
    swingLine.pulsar.start(swingLine.handle);
    swingLine.view.addChild(swingLine.pathView.view);
  };

  swingLine.stop = function(){
    swingLine.pulsar.stop();
    swingLine.view.removeChild(swingLine.pathView.view);
  };

  swingLine.handle = function(current){
      swingLine.bezierCurve.cpoint1.y = (current - 0.5) * swingLine.amplitude;
      swingLine.pathView.draw();
  };

  return swingLine;
}
