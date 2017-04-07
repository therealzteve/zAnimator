import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

function squareConstructor(options){

      checkParameter(options, 'squareShape', true);
      checkParameter(options, 'color', false, '#000');

      var square = abstractShape();
      square.squareShape = options.squareShape;
      square.color = options.color;

      square.draw = function(){
          this.view.graphics.clear();
          this.view.graphics.beginFill(this.color).drawRect(0, 0, this.squareShape.sidelength * this.scale, this.squareShape.sidelength * this.scale);
      };

      square.getWidth = function(){
        return this.squareShape.sidelength * this.scale;
      };

      square.getHeight = function(){
        return this.squareShape.sidelength * this.scale;
      };

      square.draw();
      return square;
}

export default squareConstructor;
