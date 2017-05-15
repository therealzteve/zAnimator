import checkParameter from '~/internal/check_parameter';
import container from '~/factories/createjs/components/container';
import arcPath from '~/geometry/paths/arc';
import path from '~/factories/createjs/components/path';

export default function(options){

  checkParameter(options, 'rows', true);
  checkParameter(options, 'radius', true);

  var incompleteCircles = {};
  incompleteCircles.view = container();
  incompleteCircles.rows = options.rows;
  incompleteCircles.radius = options.radius;
  incompleteCircles.arcs = [];

  for(var i = 0; i < incompleteCircles.rows; i++){
    var arc = path({
      path: arcPath({
        start: { x: 0, y: -( ((i + 1) / incompleteCircles.rows) * incompleteCircles.radius)},
        degrees: 180,
        radius: ((i + 1) / incompleteCircles.rows) * incompleteCircles.radius
      })
    });
    incompleteCircles.arcs.push(arc);
    var positionContainer = container();
    positionContainer.x = incompleteCircles.radius;
    positionContainer.y = incompleteCircles.radius;
    positionContainer.addChild(arc.view);
    positionContainer.rotation = Math.random() * 360;
    incompleteCircles.view.addChild(positionContainer);
  }

  return incompleteCircles;
}
