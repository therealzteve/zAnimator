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
  var curve = {};

  checkParameter(options, 'length', true);
  checkParameter(options, 'amplitude', true);
  checkParameter(options, 'time', true);

  curve.length = options.length;
  curve.amplitude = options.amplitude;
  curve.time = options.time;

  curve.pulsar = pulsar(curve.time, 0.5);
  curve.view = container();
  curve.bezierCurve = bezierCurve({start: {x: 0, y: 0}, end: {x: curve.length, y: 0}, cpoint1: {x: 0, y: 0}, cpoint2: {x: curve.length / 2, y: 0}});
  curve.pathView = pathView({path: curve.bezierCurve});

  curve.start = function(){
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  curve.stop = function(){
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  curve.handle = function(current){
      this.bezierCurve.end.y = (current - 0.5) * this.amplitude;
      this.bezierCurve.cpoint1.x = Math.abs(current - 0.5 ) * this.length;
      this.bezierCurve.cpoint2.x = (Math.abs(current - 0.5 ) + 0.5) * this.length;
      this.bezierCurve.cpoint2.y = (current - 0.5 ) / 2 * this.amplitude;
      this.pathView.draw();
  };

  return curve;
}
