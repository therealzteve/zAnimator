import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

export default function(options){

      /* Parameters */
      checkParameter(options, 'circleShape', true);
      checkParameter(options, 'color', false, '#000');

      /* Private vars */
      var circle = abstractShape();

      /* public properties */
      circle.circleShape = options.circleShape;
      circle.color = options.color;

      /* public methods */
      circle.draw = function(){
          circle.view.graphics.clear();
          circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.getWidth = function(){
        return circle.circleShape.radius * circle.scale * 2;
      };

      circle.getHeight = function(){
        return circle.circleShape.radius * circle.scale * 2;
      };

      /* init */
      circle.draw();
      return circle;
}
