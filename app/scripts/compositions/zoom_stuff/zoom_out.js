import linearPulsar from '~/modificators/scale/linear_pulsar';
import checkParameter from '~/internal/check_parameter';
import centralizer from '~/filters/mover/center/centralizer';

export default function(options){

  checkParameter(options, 'child', true);
  checkParameter(options, 'interval', true);

  options.numberOfIntervals = 1;
  options.limit = 0;
  options.rising = true;
  options.centerIfPossible = true;
  options.width = options.child.getWidth();
  options.height = options.child.getHeight();
  options.subject = options.child;
  options.steepness = 1;
  options.numberOfIntervals = 1;

  var zoomOut = {};
  zoomOut._centralizer = centralizer(options);
  zoomOut._zoomer = linearPulsar(options);
  zoomOut.view = zoomOut._centralizer.view;

  zoomOut.start = function(){
    this._zoomer.start();
  };

  zoomOut.stop = function(){
    this._zoomer.stop();
  };

  zoomOut.reset = function(){
    this._zoomer.reset();
  };

  return zoomOut;
}
