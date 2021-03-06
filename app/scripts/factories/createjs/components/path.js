import abstractShape from './abstract_shape';
import pathDrawer from './helper/path_drawer';
import addUpPoints from '~/geometry/add_up_points';
import checkParameter from '~/internal/check_parameter';

export default function(options){
      if(!options){
        options = {};
      }

      checkParameter(options, 'path', true);
      checkParameter(options, 'color', false, '#000');
      checkParameter(options, 'width', false, 1);

      var custom = abstractShape();
      custom.completePath = options.path;
      custom.color = options.color;
      custom.width = options.width;

      custom.draw = function(){
          this.view.graphics.clear();
          this.view.graphics.beginStroke(this.color).setStrokeStyle(this.width).moveTo(0, 0);
          var current = {x: 0, y: 0};
          var i = 1;
          for(var path of this.completePath.subPaths){
            pathDrawer[path.type](this.view.graphics, path, current);
            current = addUpPoints(current, path.getEdgePoint());
            i++;
          }
      };

      custom.draw();
      return custom;
}
