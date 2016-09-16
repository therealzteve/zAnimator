import abstractComponent from './abstract_component';

export default function(squareGeometry, color){

      var square = abstractComponent();
      square.sideLength = squareGeometry.sidelength;
      square.color = color;

      square.draw = function(){
          square.view.graphics.clear();
          square.view.graphics.beginFill(square.color).drawRect(0, 0, square.sideLength * square.scale, square.sideLength * square.scale);
      };

      square.draw();
      return square;
}
