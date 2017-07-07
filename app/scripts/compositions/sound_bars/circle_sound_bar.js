import checkParameter from '~/internal/check_parameter';
import circleShape from '~/geometry/shapes/circle';
import circle from '~/factories/createjs/components/circle';
import centralizer from '~/filters/mover/center/centralizer';

export default function(options){
  checkParameter(options, 'radius', true);
  checkParameter(options, 'thickness', true);
  checkParameter(options, 'color', true);

  var circleSoundBar = {};
  circleSoundBar.radius = options.radius;
  circleSoundBar.thickness = options.thickness;
  circleSoundBar.color = options.color;
  circleSoundBar.current = 0;
  circleSoundBar.circle = circle({circleShape: circleShape({radius: circleSoundBar.radius}), thickness: circleSoundBar.thickness, lineColor: circleSoundBar.color, color: 'rgba(0,0,0,0)'});
  circleSoundBar._centralizer = centralizer({width: circleSoundBar.radius * 2, height: circleSoundBar.radius * 2, child: circleSoundBar.circle});
  circleSoundBar.view = circleSoundBar._centralizer.view;

  circleSoundBar.draw = function(){
    this.circle.circleShape.radius = this.radius * this.current;
    this.circle.draw();
    this._centralizer.draw();
  };

  return circleSoundBar;

}
