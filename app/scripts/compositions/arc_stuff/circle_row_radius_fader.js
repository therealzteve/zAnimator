import checkParameter from '~/internal/check_parameter';
import transitionModificator from '~/modificators/transition_modificator';

export default function(options){
  checkParameter(options, 'circleRows', true);
  checkParameter(options, 'interval', true);
  checkParameter(options, 'minRadius', false, options.circleRows.radius);
  checkParameter(options, 'maxRadius', true);

  var circleRowRadiusFader = transitionModificator({}, {interval: options.interval});
  circleRowRadiusFader.circleRows = options.circleRows;
  circleRowRadiusFader.minRadius = options.minRadius;
  circleRowRadiusFader.maxRadius = options.maxRadius;

  circleRowRadiusFader.handle = function(current){
    this.circleRows.radius = this.minRadius + (this.maxRadius - this.minRadius) * current;
  };

  return circleRowRadiusFader;
}
