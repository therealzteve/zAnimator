import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import bezierCurve from '~/geometry/paths/bezier_curve';
import pulsar from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';

/*
 TODO: Change swingline in spinner
*/

/**
* Options:
* length --> length of the swing line
* radius --> radius in which the cpoints should rotate
* time --> time for a complete animaton
*/
export default function(options){
  var swingLine = {};

  checkParameter(options, 'length', true);
  checkParameter(options, 'amplitude', true);
  checkParameter(options, 'stretch', false, 0);
  checkParameter(options, 'time', true);

  swingLine.length = options.length;
  swingLine.amplitude = options.amplitude;
  swingLine.time = options.time;
  swingLine.stretch = options.stretch;

  swingLine.pulsar = pulsar(swingLine.time, 0.5);
  swingLine.view = container();
  swingLine.bezierCurve = bezierCurve({start: {x: 0, y: 0}, end: {x: swingLine.length, y: 0}, cpoint1: {x: swingLine.length / 2 - swingLine.stretch, y: 0}, cpoint2: {x: swingLine.length / 2 + swingLine.stretch, y: 0}});
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
      swingLine.bezierCurve.end.y = (current - 0.5) * swingLine.amplitude;
      swingLine.bezierCurve.cpoint2.y = (swingLine.pulsar.getRelativeCurrent(-0.25) - 0.5) * 1.5 * swingLine.amplitude;
      swingLine.bezierCurve.cpoint1.y = (swingLine.pulsar.getRelativeCurrent(-0.5) - 0.5) * 1.5 * swingLine.amplitude;
      swingLine.bezierCurve.start.y = (swingLine.pulsar.getRelativeCurrent(-0.75) - 0.5) * swingLine.amplitude;
      swingLine.pathView.draw();
  };

  return swingLine;
}
