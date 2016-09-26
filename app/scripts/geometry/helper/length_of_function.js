export default function( calculateFunction, start, end, step){
    var internalStep = step ? step : 0.01;

    var total = 0;


    for( var x = start; x < end; x += internalStep ){
      var currentY = calculateFunction(x);
      var nextStepY = calculateFunction(x + internalStep);
      var distanceY = currentY - nextStepY;

      var distance = Math.sqrt( internalStep * internalStep + distanceY * distanceY);
      total += distance;
    }

    return total;
}
