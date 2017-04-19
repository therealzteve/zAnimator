import abstractShape from './abstract_shape';
import checkParameter from '~/internal/check_parameter';

export default function(options){
      var line = abstractShape();

      checkParameter(options, 'linePath', true);
      checkParameter(options, 'thickness', false, 1);
      checkParameter(options, 'color', false, '#000');

      line.path = options.linePath;
      line.color = options.color;
      line.thickness = options.thickness;

      line.draw = function(){
          this.view.graphics
            .clear()
            .beginStroke(this.color)
            .setStrokeStyle(this.thickness * this.scale)
            .moveTo(this.path.start.x * this.scale, this.path.start.y * this.scale)
            .lineTo(this.path.end.x * this.scale, this.path.end.y * this.scale);
      };

      line.getWidth = function(){
        return (this.path.end.x - this.path.start.x) * this.scale;
      };

      line.getHeight = function(){
        return (this.path.end.y - this.path.start.y) * this.scale;
      };


      line.draw();
      return line;
}
