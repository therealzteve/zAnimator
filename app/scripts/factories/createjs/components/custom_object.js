import abstractComponent from './abstract_component';
import pathDrawer from './helper/path_drawer';
import addUpPoints from '~/geometry/add_up_points';
import checkParameter from '~/internal/check_parameter';

export default function(options) {

  var custom = abstractComponent();
  checkParameter(options, 'customShape', true);
  checkParameter(options, 'color', false, '#000');
  custom.customShape = options.customShape;
  custom.color = options.color;

  custom.draw = function() {
    custom.view.graphics.clear();
    custom.view.graphics.beginFill(custom.color).beginStroke('#00F').moveTo(0, 0);
    var current = {
      x: 0,
      y: 0
    };
    var i = 1;
    for (var path of custom.customShape.path.subPaths) {
      pathDrawer[path.type](custom.view.graphics, path, current);
      current = addUpPoints(current, path.getEdgePoint());
      i++;
    }
  };

  custom.draw();
  return custom;
}
