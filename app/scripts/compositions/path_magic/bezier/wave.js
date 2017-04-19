import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import bezierCurve from '~/geometry/paths/bezier_curve';
import pulsar from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';


/**
* Options:
* length --> length of the wave
* amplitude --> amplitude of the wave
* stretch --> TODO: Define stretch
* time --> time for a complete animaton
*/
export default function(options){
  var wave = {};

  checkParameter(options, 'length', true);
  checkParameter(options, 'amplitude', true);
  checkParameter(options, 'stretch', false, 0);
  checkParameter(options, 'time', true);

  wave.length = options.length;
  wave.amplitude = options.amplitude;
  wave.time = options.time;
  wave.stretch = options.stretch;

  wave.pulsar = pulsar(wave.time, 0.5);
  wave.view = container();
  wave.bezierCurve = bezierCurve({start: {x: 0, y: 0}, end: {x: wave.length, y: 0}, cpoint1: {x: wave.length / 2 - wave.stretch, y: 0}, cpoint2: {x: wave.length / 2 + wave.stretch, y: 0}});
  wave.pathView = pathView({path: wave.bezierCurve});

  wave.start = function(){
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  wave.stop = function(){
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  wave.handle = function(current){
      this.bezierCurve.end.y = (current - 0.5) * this.amplitude;
      this.bezierCurve.cpoint2.y = (this.pulsar.getRelativeCurrent(-0.25) - 0.5) * 1.5 * this.amplitude;
      this.bezierCurve.cpoint1.y = (this.pulsar.getRelativeCurrent(-0.5) - 0.5) * 1.5 * this.amplitude;
      this.bezierCurve.start.y = (this.pulsar.getRelativeCurrent(-0.75) - 0.5) * this.amplitude;
      this.pathView.draw();
  };

  return wave;
}
