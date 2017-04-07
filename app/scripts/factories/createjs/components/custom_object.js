import abstractShape from './abstract_shape';
import pathDrawer from './helper/path_drawer';
import addUpPoints from '~/geometry/add_up_points';
import checkParameter from '~/internal/check_parameter';

export default function(options) {

  var custom = abstractShape();
  checkParameter(options, 'customShape', true);
  checkParameter(options, 'color', false, '#000');
  custom.customShape = options.customShape;
  custom.color = options.color;

  custom.draw = function() {
    this.view.graphics.clear();
    this.view.graphics.beginFill(this.color).beginStroke('#00F').moveTo(0, 0);
    var current = {
      x: 0,
      y: 0
    };
    var i = 1;
    for (var path of this.customShape.path.subPaths) {
      pathDrawer[path.type](this.view.graphics, path, current);
      current = addUpPoints(current, path.getEdgePoint());
      i++;
    }
  };

  custom.draw();
  return custom;
}
