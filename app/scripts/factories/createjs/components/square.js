export default function(sideLength, color){

      var square = {};
      square.sideLength = sideLength;
      square.color = color;
      square.view = new createjs.Shape();

      square.draw = function(){
          square.view.graphics.beginFill(square.color).drawRect(0, 0, square.sideLength, square.sideLength);
      };

      square.draw();
      return square;
}
