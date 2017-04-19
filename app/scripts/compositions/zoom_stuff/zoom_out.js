import linearPulsar from '~/modificators/scale/linear_pulsar';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);

  options.numberOfIntervals = 1;
  options.limit = 0;
  options.rising = true;
  options.centerIfPossible = true;

  var zoomOut = {};
  zoomOut._zoomer = linearPulsar(options);

  zoomOut.start = function(){
    this._zoomer.start();
  };

  zoomOut.stop = function(){
    this._zoomer.stop();
  };

  return zoomOut;
}
