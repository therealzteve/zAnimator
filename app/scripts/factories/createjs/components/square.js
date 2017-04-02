import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

function squareConstructor(options){

      checkParameter(options, 'squareShape', true);
      checkParameter(options, 'color', false, '#000');

      var square = abstractShape();
      square.squareShape = options.squareShape;
      square.color = options.color;

      square.draw = function(){
          square.view.graphics.clear();
          square.view.graphics.beginFill(square.color).drawRect(0, 0, square.squareShape.sidelength * square.scale, square.squareShape.sidelength * square.scale);
      };

      square.getWidth = function(){
        return square.squareShape.sidelength * square.scale;
      };

      square.getHeight = function(){
        return square.squareShape.sidelength * square.scale;
      };

      square.getCopy = function(){
        // var copy = squareConstructor({
        //   squareShape: square.squareShape.getCopy(),
        //   color: square.color
        // });
        // return copy;
      };

      square.draw();
      return square;
}

export default squareConstructor;
