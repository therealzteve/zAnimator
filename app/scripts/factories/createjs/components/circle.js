import abstractComponent from './abstract_component';

export default function(radius, color){

      var circle = abstractComponent();
      circle.radius = radius;
      circle.color = color;

      circle.draw = function(){
          circle.view.graphics.clear();
          circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.radius * circle.scale);
      };

      circle.draw();
      return circle;
}
