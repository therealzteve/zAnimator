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
        start: { x: 0, y: incompleteCircles.radius - (((i + 1) / incompleteCircles.rows) * incompleteCircles.radius)},
        degrees: 30,
        radius: ((i + 1) / incompleteCircles.rows) * incompleteCircles.radius
      })
    });

    incompleteCircles.arcs.push(arc);
    incompleteCircles.view.addChild(arc.view);
  }

  return incompleteCircles;
}