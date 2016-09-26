import lengthOfFunction from '~/geometry/helper/length_of_function';

export default function(start, end, frequency, amplitude){
  var line = {};
  line.start = start ? start : {x: 0, y: 0};
  line.end = end;
  line.frequency = frequency ? frequency : 1;
  line.amplitude = amplitude ? amplitude : 1;
  line.internalFunc = (x) => { return line.amplitude * Math.sin((line.frequency * Math.PI * 2) * x); };
  line.type = 'sine_wave';

  line.getEdgePoint = function(){
    return line.end;
  };

  line.getLength = function(){
    return lengthOfFunction(line.internalFunc, start.x, end.x);
  };

  line.getPoint = function(progress){
    return {
              x: line.start.x + (line.end.x - line.start.x) * progress,
              y: line.internalFunc(line.start.x + (line.end.x - line.start.x) * progress)
           };
  };

  return line;
}
