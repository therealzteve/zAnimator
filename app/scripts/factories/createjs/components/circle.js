import abstractComponent from './abstract_component';

export default function(circleShape, color){

      var circle = abstractComponent();
      circle.circleShape = circleShape;
      circle.color = color;

      circle.draw = function(){
          circle.view.graphics.clear();
          circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.draw();
      return circle;
}
