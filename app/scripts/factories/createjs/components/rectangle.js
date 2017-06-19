import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

export default function(options){

      checkParameter(options, 'rectangleShape', true);
      checkParameter(options, 'color', false, '#000');

      var rect = abstractShape();
      rect.rectangleShape = options.rectangleShape;
      rect.color = options.color;

      rect.draw = function(){
          this.view.graphics.clear();
          this.view.graphics.beginFill(this.color).drawRect(0, 0, this.rectangleShape.width * this.scale, this.rectangleShape.height * this.scale);
      };

      rect.getWidth = function(){
        return this.rectanlgeShape.width * this.scale;
      };

      rect.getHeight = function(){
        return this.rectangleShape.height * this.scale;
      };

      rect.draw();
      return rect;
}
