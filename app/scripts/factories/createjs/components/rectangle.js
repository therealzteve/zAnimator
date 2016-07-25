import abstractComponent from './abstract_component';

export default function(width, height, color){

      var rect = abstractComponent();
      rect.width = width;
      rect.height = height;
      rect.color = color;

      rect.draw = function(){
          rect.view.graphics.clear();
          rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.draw();
      return rect;
}
