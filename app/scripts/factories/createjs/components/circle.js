import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

export default function(options){

      /* Parameters */
      checkParameter(options, 'circleShape', true);
      checkParameter(options, 'color', false, '#000');
      checkParameter(options, 'thickness', false, 0);
      checkParameter(options, 'lineColor', false, '#000');

      /* Private vars */
      var circle = abstractShape();

      /* public properties */
      circle.circleShape = options.circleShape;
      circle.color = options.color;
      circle.lineColor = options.lineColor;
      circle.thickness = options.thickness;

      /* public methods */
      circle.draw = function(){
          this.view.graphics.clear();
          this.view.graphics.setStrokeStyle(this.thickness).beginStroke(this.lineColor).beginFill(this.color).drawCircle(this.circleShape.radius * this.scale, this.circleShape.radius * this.scale, this.circleShape.radius * this.scale);
      };

      circle.getWidth = function(){
        return this.circleShape.radius * this.scale * 2;
      };

      circle.getHeight = function(){
        return this.circleShape.radius * this.scale * 2;
      };

      /* init */
      circle.draw();
      return circle;
}
