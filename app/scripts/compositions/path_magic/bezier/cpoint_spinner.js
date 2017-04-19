import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import bezierCurve from '~/geometry/paths/bezier_curve';
import pulsar from '~/transitions/transition_loop';
import degreesToCoordinates from '~/geometry/helper/degrees_to_coordinates';
import checkParameter from '~/internal/check_parameter';


/**
* Options:
* length --> length of the swing line
* radius --> radius in which the cpoints should rotate
* time --> time for a complete animaton
*/
export default function(options){
  var spinner = {};

  checkParameter(options, 'length', true);
  checkParameter(options, 'radius', true);
  checkParameter(options, 'time', true);

  spinner.length = options.length;
  spinner.radius = options.radius;
  spinner.time = options.time;

  spinner.pulsar = pulsar(spinner.time, 1);
  spinner.view = container();
  spinner.bezierCurve = bezierCurve({start: {x: 0, y: 0}, end: {x: spinner.length, y: 0}, cpoint1: {x: spinner.length / 2 - spinner.radius, y: 0}, cpoint2: {x: spinner.length / 2 + spinner.radius, y: 0}});
  spinner.pathView = pathView({path: spinner.bezierCurve});

  spinner.start = function(){
    this.pulsar.start(spinner.handle);
    this.view.addChild(spinner.pathView.view);
  };

  spinner.stop = function(){
    this.pulsar.stop();
    this.view.removeChild(spinner.pathView.view);
  };

  spinner.handle = function(current){
      var coordinates = degreesToCoordinates(current * 360, this.radius);
      this.bezierCurve.cpoint1.x = this.length / 2 - coordinates.x;
      this.bezierCurve.cpoint1.y = -coordinates.y;
      this.bezierCurve.cpoint2.x = this.length / 2 + coordinates.x;
      this.bezierCurve.cpoint2.y = coordinates.y;
      this.pathView.draw();
  };

  return spinner;
}
