import abstractComponent from './abstract_component';
import checkParameter from '~/internal/check_parameter';


export default function(options){

      checkParameter(options, 'squareShape', true);
      checkParameter(options, 'color', false, '#000');

      var square = abstractComponent();
      square.sideLength = options.squareShape.sidelength;
      square.color = options.color;

      square.draw = function(){
          square.view.graphics.clear();
          square.view.graphics.beginFill(square.color).drawRect(0, 0, square.sideLength * square.scale, square.sideLength * square.scale);
      };

      square.draw();
      return square;
}
