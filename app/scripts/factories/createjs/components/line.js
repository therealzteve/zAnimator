import abstractComponent from './abstract_component';

export default function(linePath, thickness, color){

      var line = abstractComponent();
      line.path = linePath;
      line.color = color;
      line.thickness = thickness;

      line.draw = function(){
          line.view.graphics
            .beginStroke(line.color)
            .setStrokeStyle(line.thickness * line.scale)
            .moveTo(line.path.start.x * line.scale, line.path.start.y * line.scale)
            .lineTo(line.path.end.x * line.scale, line.path.end.y * line.scale);
      };

      line.draw();
      return line;
}
