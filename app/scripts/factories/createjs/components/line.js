import abstractComponent from './abstract_component';
import checkParameter from '~/internal/check_parameter';

export default function(options){
      var line = abstractComponent();

      checkParameter(options, 'linePath', true);
      checkParameter(options, 'thickness', false, 1);
      checkParameter(options, 'color', false, '#000');

      line.path = options.linePath;
      line.color = options.color;
      line.thickness = options.thickness;

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
