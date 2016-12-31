import abstractComponent from './abstract_component';
import checkParameter from '~/internal/check_parameter';

export default function(options){

      checkParameter(options, 'circleShape', true);
      checkParameter(options, 'color', false, '#000');

      var circle = abstractComponent();
      circle.circleShape = options.circleShape;
      circle.color = options.color;

      circle.draw = function(){
          circle.view.graphics.clear();
          circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.draw();
      return circle;
}
