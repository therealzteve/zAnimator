import linearPulsar from '~/modificators/scale/linear_pulsar';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);

  options.numberOfIntervals = 1;
  options.limit = 2;
  var zoomer = linearPulsar(options);

  var zoomOut = {};
  zoomOut.start = function(){
    zoomer.start();
  };

  zoomOut.stop = function(){
    zoomer.stop();
  };

  return zoomOut;
}
