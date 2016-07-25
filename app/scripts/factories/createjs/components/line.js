import abstractComponent from './abstract_component';

export default function(x, y, thickness, color){

      var line = abstractComponent();
      line.x = x;
      line.y = y;
      line.color = color;
      line.thickness = thickness;

      line.draw = function(){
          line.view.graphics.beginStroke(line.color).setStrokeStyle(line.thickness * line.scale).moveTo(0, 0).lineTo(line.x * line.scale, line.y * line.scale);
      };

      line.draw();
      return line;
}
