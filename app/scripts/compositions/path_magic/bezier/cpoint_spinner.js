import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import bezierCurve from '~/geometry/paths/bezier_curve';
import pulsar from '~/transitions/transition_loop';
import degreesToCoordinates from '~/geometry/helper/degrees_to_coordinates';
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
  checkParameter(options, 'radius', true);
  checkParameter(options, 'time', true);

  swingLine.length = options.length;
  swingLine.radius = options.radius;
  swingLine.time = options.time;

  swingLine.pulsar = pulsar(swingLine.time, 1);
  swingLine.view = container();
  swingLine.bezierCurve = bezierCurve({start: {x: 0, y: 0}, end: {x: swingLine.length, y: 0}, cpoint1: {x: swingLine.length / 2 - swingLine.radius, y: 0}, cpoint2: {x: swingLine.length / 2 + swingLine.radius, y: 0}});
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
      var coordinates = degreesToCoordinates(current * 360, swingLine.radius);
      swingLine.bezierCurve.cpoint1.x = swingLine.length / 2 - coordinates.x;
      swingLine.bezierCurve.cpoint1.y = -coordinates.y;
      swingLine.bezierCurve.cpoint2.x = swingLine.length / 2 + coordinates.x;
      swingLine.bezierCurve.cpoint2.y = coordinates.y;
      swingLine.pathView.draw();
  };

  return swingLine;
}
