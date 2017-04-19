import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

export default function(options){

      checkParameter(options, 'rectangleShape', true);
      checkParameter(options, 'color', false, '#000');

      var rect = abstractShape();
      rect.width = options.rectangleShape.width;
      rect.height = options.rectangleShape.height;
      rect.color = options.color;

      rect.draw = function(){
          this.view.graphics.clear();
          this.view.graphics.beginFill(this.color).drawRect(0, 0, this.width * this.scale, this.height * this.scale);
      };

      rect.getWidth = function(){
        return this.width * this.scale;
      };

      rect.getHeight = function(){
        return this.height * this.scale;
      };

      rect.draw();
      return rect;
}
