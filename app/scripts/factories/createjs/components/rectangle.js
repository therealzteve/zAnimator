import abstractComponent from './abstract_component';
import checkParameter from '~/internal/check_parameter';

export default function(options){

      checkParameter(options, 'rectangleShape', true);
      checkParameter(options, 'color', false, '#000');

      var rect = abstractComponent();
      rect.width = options.rectangleShape.width;
      rect.height = options.rectangleShape.height;
      rect.color = options.color;

      rect.draw = function(){
          rect.view.graphics.clear();
          rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.draw();
      return rect;
}
