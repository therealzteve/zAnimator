import abstractComponent from './abstract_component';
import pathDrawer from './helper/path_drawer';
import addUpPoints from '~/geometry/add_up_points';

export default function(completePath, color){

      var custom = abstractComponent();
      custom.completePath = completePath;
      custom.color = color;

      custom.draw = function(){
          custom.view.graphics.clear();
          custom.view.graphics.beginStroke('#00F').moveTo(0, 0);
          var current = {x: 0, y: 0};
          var i = 1;
          for(var path of custom.completePath.subPaths){
            pathDrawer[path.type](custom.view.graphics, path, current);
            current = addUpPoints(current, path.getEdgePoint());
            i++;
          }
      };

      custom.draw();
      return custom;
}
