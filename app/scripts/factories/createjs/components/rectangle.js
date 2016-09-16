import abstractComponent from './abstract_component';

export default function(rectangle, color){

      var rect = abstractComponent();
      rect.width = rectangle.width;
      rect.height = rectangle.height;
      rect.color = color;

      rect.draw = function(){
          rect.view.graphics.clear();
          rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.draw();
      return rect;
}
